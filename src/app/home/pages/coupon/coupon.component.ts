import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginatorState } from 'primeng/paginator';
import { RadioButtonClickEvent } from 'primeng/radiobutton';
import { SelectChangeEvent } from 'primeng/select';
import { SliderChangeEvent } from 'primeng/slider';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, Subject, Subscription, tap } from 'rxjs';
import { HomeService } from '../../data-access/home.service';
import { Categories, Chronologies, FilterEnum, IFilterForm, Locations, Percentages, PriceRange } from '../../models/coupon-filter';
import { ICoupon } from '../../models/coupon';

@Component({
  selector: 'app-coupon',
  standalone: false,
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent implements OnInit {

  private _home = inject(HomeService);
  private allCouponsSubject = new Subject<ICoupon[]>();
  allCoupons$ = this.allCouponsSubject.asObservable();

  private filterActionSubject = new BehaviorSubject<String>('search');
  filterAction$ = this.filterActionSubject.asObservable();

  categories = Categories;
  percentages = Percentages;
  locations = Locations;
  chronologies = Chronologies;
  priceRange = PriceRange;

  filterForm!: FormGroup;
  FilterEnum = FilterEnum;

  first: number = 0;
  rows: number = 16;
  totalRecord: number = 0;

  fetchedCoupons$ = this._home.getAllCoupons().pipe(
    tap((coupons) => {
      this.totalRecord = coupons.length;
      this.allCouponsSubject.next(coupons);
      this.filterActionSubject.next("next");
    })
  )

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      search: [""],
      category: [""],
      priceRange: [[this.priceRange.min, this.priceRange.max]],
      percentage: [""],
      location: [""],
      sort: [this.chronologies[0]]
    });
  }

  getDisplayedCoupons(coupons: ICoupon[], index: number): ICoupon[] {
    const endIndex = Math.min(index + this.rows, this.totalRecord);
    return coupons.slice(index, endIndex);
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.filterActionSubject.next("pageChange");
  }

  generalFilter(
    filterCode:
    | FilterEnum.category
    | FilterEnum.location
    | FilterEnum.percentage
    | FilterEnum.priceRange
    | FilterEnum.search
    | FilterEnum.sort,
    event?: RadioButtonClickEvent | SliderChangeEvent | SelectChangeEvent,
  ) {
    switch (filterCode) {
      case FilterEnum.category:
        if (event?.value.toLowerCase() === 'clear') {
          this.filterForm.patchValue({
            category: ''
          })
        }
        break;

      case FilterEnum.percentage:
        if (event?.value.name.toLowerCase() === 'clear') {
          this.filterForm.patchValue({
            percentage: ''
          })
        }
        break;

      case FilterEnum.location:
        if (event?.value.toLowerCase() === 'clear') {
          this.filterForm.patchValue({
            location: ''
          })
        }
        break;

      case FilterEnum.priceRange:
        break;

      case FilterEnum.search:
        break;
    }
    this.filterActionSubject.next(filterCode);
  }

  displayedCoupons$ = combineLatest([
    this.fetchedCoupons$,
    this.allCoupons$,
    this.filterAction$
  ]).pipe(
    map(([fetchedCoupons, allCoupons, filter]) => {
      allCoupons = this.filterItems(fetchedCoupons, this.filterForm.value);

      if (filter !== "pageChange") {
        this.first = 0;
      }
      this.totalRecord = allCoupons.length;
      return this.getDisplayedCoupons(allCoupons, this.first)
    })
  )

  filterItems(items: ICoupon[], filters: Partial<IFilterForm>): ICoupon[] {
    return items.filter(item =>
      (filters.search ? item.title.toLowerCase().includes(filters.search.toLowerCase()) : true) &&
      (filters.category ? item.category.category_name.toLowerCase() === filters.category.toLowerCase() : true) &&
      (filters.location ? item.company_location === filters.location : true) &&
      (filters.percentage ? (item.coupon_discount >= (filters.percentage.min as number)) && (item.coupon_discount <= (filters.percentage.max as number)) : true) &&
      (filters.priceRange ? (+item.amount >= filters.priceRange[0]) && (+item.amount <= filters.priceRange[1]) : true)
    ).sort((a, b) => filters.sort?.key === "up" ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime() : new Date(b.created_at).getTime() - new Date(a.created_at).getTime() );
  }
}
