import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DrawerModule,
    RadioButtonModule,
    SliderModule,
    PaginatorModule,
    SelectModule,
    InputTextModule,
    HttpClientModule
  ],
  exports: [
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DrawerModule,
    RadioButtonModule,
    SliderModule,
    PaginatorModule,
    SelectModule,
    InputTextModule,
    HttpClientModule
  ]
})
export class SharedModule { }
