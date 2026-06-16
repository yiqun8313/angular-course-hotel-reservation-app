import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReservationState, reservationFeatureKey } from './reservation.state';

export const selectReservationState = createFeatureSelector<ReservationState>(reservationFeatureKey);

export const selectAllReservations = createSelector(
  selectReservationState,
  state => state.reservations
);

export const selectReservationById = (id: string) => createSelector(
  selectAllReservations,
  reservations => reservations.find(reservation => reservation.id === id)
);

export const selectReservationCount = createSelector(
  selectAllReservations,
  reservations => reservations.length
);

export const selectTotalPrice = createSelector(
  selectAllReservations,
  reservations => reservations.reduce((total, reservation) => total + (reservation.totalPrice || 0), 0)
);

export const selectRoomSummary = createSelector(
  selectAllReservations,
  reservations => ({
    single: reservations.filter(r => r.roomType === 'single').length,
    double: reservations.filter(r => r.roomType === 'double').length,
    suite: reservations.filter(r => r.roomType === 'suite').length
  })
);
