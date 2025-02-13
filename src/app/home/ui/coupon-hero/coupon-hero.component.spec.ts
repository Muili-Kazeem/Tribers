import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponHeroComponent } from './coupon-hero.component';

describe('CouponHeroComponent', () => {
  let component: CouponHeroComponent;
  let fixture: ComponentFixture<CouponHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
