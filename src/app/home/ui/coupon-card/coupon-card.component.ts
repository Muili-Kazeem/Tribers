import { Component, Input } from '@angular/core';
import { ICoupon } from '../../models/coupon';

@Component({
  selector: 'app-coupon-card',
  standalone: false,
  templateUrl: './coupon-card.component.html',
  styleUrl: './coupon-card.component.scss'
})
export class CouponCardComponent {
  @Input() coupon!: ICoupon;
}
