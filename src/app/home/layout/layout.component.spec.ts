import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { CouponFooterComponent } from '../ui/coupon-footer/coupon-footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, NavBarComponent, CouponFooterComponent],
      imports: [RouterModule, SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LayoutComponent', () => {
    expect(component).toBeTruthy();
  });
});
