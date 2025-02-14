import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { SharedModule } from './shared/shared.module';
import { MyPreset } from './mypreset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: false || 'none'
          }
      },
      ripple: true,

  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
