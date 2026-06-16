import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { StarWarsFilmsComponent } from './star-wars-films/star-wars-films.component';
import { PracticeLabComponent } from './practice/practice-lab.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReservationListComponent},
  {path:"new", component: ReservationFormComponent},
  {path:"edit/:id", component:ReservationFormComponent},
  {path:"counter", component: RxjsCounterComponent},
  {path:"star-wars-films", component: StarWarsFilmsComponent},
  {path:"practice", component: PracticeLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
