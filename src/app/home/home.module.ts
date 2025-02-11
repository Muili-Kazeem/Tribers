import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { StoreComponent } from './pages/store/store.component';
import { SharedModule } from '../shared/shared.module';
import { CouponComponent } from './pages/coupon/coupon.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    LayoutComponent,
    StoreComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
