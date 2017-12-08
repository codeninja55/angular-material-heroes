import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MAT_PLACEHOLDER_GLOBAL_OPTIONS,
  MatSnackBarModule,
  MatRippleModule,
} from '@angular/material';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRippleModule,
    MatGridListModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRippleModule,
    MatGridListModule,
  ],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'auto'}}
  ]
})

export class MaterialModule { }
