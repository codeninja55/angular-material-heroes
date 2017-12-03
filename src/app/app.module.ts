import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MatNavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
