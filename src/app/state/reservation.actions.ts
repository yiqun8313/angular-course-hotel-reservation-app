import { createAction, props } from '@ngrx/store';
import { Reservation } from '../models/reservation';

export const loadReservations = createAction(
  '[Reservation] Load Reservations',  ///前面是来源的组件 后面是要做的事情
  props<{ reservations: Reservation[] }>()
);

export const addReservation = createAction(
  '[Reservation] Add Reservation',
  props<{ reservation: Reservation }>()
);

export const addReservationSuccess = createAction(
  '[Reservation] Add Reservation Success',
  props<{ reservation: Reservation }>()
);

export const addReservationFailure = createAction(
  '[Reservation] Add Reservation Failure',
  props<{ error: unknown }>()
);

export const updateReservation = createAction(
  '[Reservation] Update Reservation',
  props<{ id: string; reservation: Reservation }>()
);

export const updateReservationSuccess = createAction(
  '[Reservation] Update Reservation Success',
  props<{ id: string; reservation: Reservation }>()
);

export const updateReservationFailure = createAction(
  '[Reservation] Update Reservation Failure',
  props<{ error: unknown }>()
);

export const deleteReservation = createAction(
  '[Reservation] Delete Reservation',
  props<{ id: string }>()
);

export const deleteReservationSuccess = createAction(
  '[Reservation] Delete Reservation Success',
  props<{ id: string }>()
);

export const deleteReservationFailure = createAction(
  '[Reservation] Delete Reservation Failure',
  props<{ error: unknown }>()
);
