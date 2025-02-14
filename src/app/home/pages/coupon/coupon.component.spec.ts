import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponComponent } from './coupon.component';
import { SharedModule } from '../../../shared/shared.module';
import { HomeService } from '../../data-access/home.service';
import { CouponCardComponent } from '../../ui/coupon-card/coupon-card.component';
import { CouponHeroComponent } from '../../ui/coupon-hero/coupon-hero.component';

describe('CouponComponent', () => {
  let component: CouponComponent;
  let fixture: ComponentFixture<CouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponComponent, CouponCardComponent, CouponHeroComponent],
      imports: [SharedModule],
      providers: [HomeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
