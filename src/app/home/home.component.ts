import { Component, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectAllReservations, selectReservationCount, selectTotalPrice, selectRoomSummary } from '../state/reservation.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly reservations = toSignal(this.store.select(selectAllReservations), { initialValue: [] });
  readonly reservationCount = toSignal(this.store.select(selectReservationCount), { initialValue: 0 });
  readonly totalPrice = toSignal(this.store.select(selectTotalPrice), { initialValue: 0 });
  readonly roomSummary = toSignal(this.store.select(selectRoomSummary), { initialValue: { single: 0, double: 0, suite: 0 } });

  readonly averagePrice = computed(() => {
    return this.reservationCount() > 0 ? this.totalPrice() / this.reservationCount() : 0;
  });

  constructor(private store: Store) {}
}
