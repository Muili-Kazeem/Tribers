import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon-footer',
  standalone: false,
  templateUrl: './coupon-footer.component.html',
  styleUrl: './coupon-footer.component.scss'
})
export class CouponFooterComponent implements OnInit {

  requestForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initRequestForm();
  }

  initRequestForm() {
    this.requestForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      product: [''],
      vendor: [''],
    });
  }
}
