import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICoupon, ICouponResponse } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'json/couponDataTest.json';

  constructor(
    private http: HttpClient,
  ) { }

  getAllCoupons(): Observable<ICoupon[]> {
    return this.http.get<ICouponResponse>(this.url).pipe(
      map( res => res.data )
    );
  }
}
