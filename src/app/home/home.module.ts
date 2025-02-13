import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { CouponComponent } from './pages/coupon/coupon.component';
import { CouponCardComponent } from './ui/coupon-card/coupon-card.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { CouponFooterComponent } from './ui/coupon-footer/coupon-footer.component';
import { CouponHeroComponent } from './ui/coupon-hero/coupon-hero.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    LayoutComponent,
    CouponComponent,
    CouponCardComponent,
    NavBarComponent,
    CouponFooterComponent,
    CouponHeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
