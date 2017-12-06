import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatNavbarComponent  } from './mat-navbar/mat-navbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    MatNavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
  ],
  entryComponents: [],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
