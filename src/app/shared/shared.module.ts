import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';


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
  ]
})
export class SharedModule { }
