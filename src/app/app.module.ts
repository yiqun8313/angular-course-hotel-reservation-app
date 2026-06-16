import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { reservationReducer } from './state/reservation.reducer';
import { ReservationEffects } from './state/reservation.effects';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { StarWarsFilmsComponent } from './star-wars-films/star-wars-films.component';
import { PracticeModule } from './practice/practice.module';

@NgModule({
  declarations: [
    AppComponent,
    RxjsCounterComponent,
    StarWarsFilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ reservations: reservationReducer }),
    EffectsModule.forRoot([ReservationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    HomeModule,
    ReservationModule,
    PracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
