import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponFooterComponent } from './coupon-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

describe('CouponFooterComponent', () => {
  let component: CouponFooterComponent;
  let fixture: ComponentFixture<CouponFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponFooterComponent],
      imports: [SharedModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
