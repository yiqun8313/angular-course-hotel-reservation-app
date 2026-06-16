import { Injectable, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Reservation } from '../models/reservation';
import { loadReservations, addReservation, updateReservation, deleteReservation } from './reservation.actions';
import { selectAllReservations, selectReservationCount, selectTotalPrice, selectRoomSummary } from './reservation.selectors';

@Injectable({
  providedIn: 'root'
})
export class ReservationFacade {
  readonly reservations$ = this.store.select(selectAllReservations);
  readonly reservations = toSignal(this.reservations$, { initialValue: [] });
  readonly reservationCount = toSignal(this.store.select(selectReservationCount), { initialValue: 0 });
  readonly totalPrice = toSignal(this.store.select(selectTotalPrice), { initialValue: 0 });
  readonly roomSummary = toSignal(this.store.select(selectRoomSummary), { initialValue: { single: 0, double: 0, suite: 0 } });

  constructor(private store: Store) {
    this.loadFromLocalStorage();
    this.reservations$.subscribe(reservations => {
      localStorage.setItem('reservations', JSON.stringify(reservations));
    });
  }

  loadFromLocalStorage() {
    const stored = localStorage.getItem('reservations');
    if (stored) {
      try {
        const reservations: Reservation[] = JSON.parse(stored);
        this.store.dispatch(loadReservations({ reservations }));
      } catch {
        this.store.dispatch(loadReservations({ reservations: [] }));
      }
    }
  }

  add(reservation: Reservation) {
    this.store.dispatch(addReservation({ reservation }));
  }

  update(id: string, reservation: Reservation) {
    this.store.dispatch(updateReservation({ id, reservation }));
  }

  delete(id: string) {
    this.store.dispatch(deleteReservation({ id }));
  }

  getReservationById(id: string) {
    return this.store.select((state: any) => selectAllReservations(state).find((res: Reservation) => res.id === id));
  }
}
