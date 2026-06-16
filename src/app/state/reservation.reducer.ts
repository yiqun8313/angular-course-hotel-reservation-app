import { createReducer, on } from '@ngrx/store';
import { ReservationState, initialReservationState } from './reservation.state';
import {
  loadReservations,
  addReservationSuccess,
  updateReservationSuccess,
  deleteReservationSuccess
} from './reservation.actions'; // 引入进去 actions

export const reservationReducer = createReducer(
  initialReservationState,
  on(loadReservations, (state, { reservations }) => ({ ...state, reservations })), // state 是我们当前的reducer的state
  on(addReservationSuccess, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation] // change the origianl array
  })),
  on(updateReservationSuccess, (state, { id, reservation }) => ({
    ...state,
    reservations: state.reservations.map(item => item.id === id ? reservation : item)
  })),
  on(deleteReservationSuccess, (state, { id }) => ({
    ...state,
    reservations: state.reservations.filter(item => item.id !== id)
  })),
);
