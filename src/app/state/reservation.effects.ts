import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ReservationService } from '../reservation/reservation.service';
import {
  addReservation,
  addReservationFailure,
  addReservationSuccess,
  deleteReservation,
  deleteReservationFailure,
  deleteReservationSuccess,
  updateReservation,
  updateReservationFailure,
  updateReservationSuccess
} from './reservation.actions';

@Injectable()
export class ReservationEffects {

  addReservation$ = createEffect(() => this.actions$.pipe(
    ofType(addReservation),
    mergeMap((action) => this.reservationService.addReservation(action.reservation)
      .pipe(
        map(reservation => addReservationSuccess({ reservation })),
        catchError((error) => of(addReservationFailure({ error })))
      )
    )
  ));

  updateReservation$ = createEffect(() => this.actions$.pipe(
    ofType(updateReservation),
    mergeMap((action) => this.reservationService.updateReservation(action.id, action.reservation)
      .pipe(
        map(reservation => updateReservationSuccess({ id: action.id, reservation })),
        catchError((error) => of(updateReservationFailure({ error })))
      )
    )
  ));

  deleteReservation$ = createEffect(() => this.actions$.pipe(
    ofType(deleteReservation),
    mergeMap((action) => this.reservationService.deleteReservation(action.id)
      .pipe(
        map(id => deleteReservationSuccess({ id })),
        catchError((error) => of(deleteReservationFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ){}
}
