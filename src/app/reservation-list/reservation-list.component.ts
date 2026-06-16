import { Component, computed, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectAllReservations, selectTotalPrice } from '../state/reservation.selectors';
import { deleteReservation } from '../state/reservation.actions';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  readonly reservations = toSignal(this.store.select(selectAllReservations), { initialValue: [] as Reservation[] });
  readonly totalPrice = toSignal(this.store.select(selectTotalPrice), { initialValue: 0 });
  readonly filterName = signal('');
  readonly filteredReservations = computed(() => {
    const filterName = this.filterName().toLowerCase();

    return this.reservations().filter(reservation =>
      reservation.guestName.toLowerCase().includes(filterName) ||
      reservation.guestEmail.toLowerCase().includes(filterName) ||
      reservation.roomType.toLowerCase().includes(filterName) ||
      reservation.roomNumber.toString().includes(filterName)
    );
  });
  readonly title = signal('chris');
  readonly subtitle = signal('manager');
  fullname = computed(()=> `${this.title()} ${this.subtitle()}`);

  constructor(private store: Store){}

  deleteReservation(id: string){
    this.store.dispatch(deleteReservation({ id }));
  }

}
