import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PaginatorState } from 'primeng/paginator';
import { RadioButtonClickEvent } from 'primeng/radiobutton';
import { SelectChangeEvent } from 'primeng/select';
import { SliderChangeEvent } from 'primeng/slider';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-coupon',
  standalone: false,
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) {}

  categories: any[] = [
    { name: 'Restaurant', key: 'A' },
    { name: 'Music', key: 'M' },
    { name: 'Shopping', key: 'P' },
    { name: 'Ride', key: 'R' },
    { name: "E-commerce", key: 'E-C' }
  ];

  percentages: any[] = [
    { name: 'Free', key: 'A' },
    { name: '0 - 10%', key: 'M' },
    { name: '10 - 25%', key: 'P' },
    { name: '35 - 50%', key: 'R' },
    { name: "50 - 65%", key: 'E-C' },
    { name: "65% & Above", key: 'E-A' }
  ];

  locations: any[] = [
    { name: 'Lagos', key: 'lagos' },
    { name: 'Ogun', key: 'ogun' },
    { name: 'Oyo', key: 'oyo' },
    { name: 'Abuja', key: 'abuja' },
    { name: "Port Harcourt", key: 'port-harcourt' },
    { name: "Others", key: 'others' }
  ];

  chronologies = [
    { name: 'Newest to oldest', code: 'up' },
    { name: 'Oldest to newest', code: 'down' },
  ];

  filterForm!: FormGroup;
  searchControl = new FormControl('');
  selectedChronology = this.chronologies[0];

  priceRange = {
    min: 1000,
    max: 500000
  }


  ngOnInit() {
    this.initFilterForm();

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // switchMap(value =>
      //   this.performSearch(value)
      // )
    ).subscribe(results => console.log(results));
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      category: [""],
      priceRange: [[1000, 500000]],
      percentage: [''],
      location: [''],
    });
  }

  first: number = 0;
  rows: number = 10;
  totalRecord: number = 120;

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
  }

  filterCategory(event: RadioButtonClickEvent) {
    console.log(event);
  }

  filterPrice(event: SliderChangeEvent) {
    console.log(event);
  }

  filterChronology(event: SelectChangeEvent) {
    console.log(event)
  }
}
