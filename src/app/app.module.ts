import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// All Angular Material Modules imported at once
import { MaterialModule } from './material.module';

// Custom Project Components
import { AppComponent } from './app.component';
import { MatNavbarComponent  } from './mat-navbar/mat-navbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MatNavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroFormComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  entryComponents: [],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
