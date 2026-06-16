import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Reservation, RoomPrice, RoomType } from '../models/reservation';
import { addReservation, updateReservation } from '../state/reservation.actions';
import { selectReservationById } from '../state/reservation.selectors';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});
  readonly roomTypes: RoomType[] = ['single', 'double', 'suite'];
  readonly selectedRoomType = signal<RoomType>('single');
  readonly pricePerNight = computed(() => RoomPrice[this.selectedRoomType()]);
  readonly nights = signal(0);
  readonly totalPrice = computed(() => this.pricePerNight() * this.nights());
  private editingId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.min(1)]],
      roomType: ['single', Validators.required]
    });

    this.reservationForm.get('roomType')?.valueChanges.subscribe((value: RoomType) => {
      this.selectedRoomType.set(value);
    });

    this.reservationForm.valueChanges.subscribe(value => {
      this.nights.set(this.calculateNights(value.checkInDate, value.checkOutDate));
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.editingId = id;
      firstValueFrom(this.store.select(selectReservationById(id))).then(reservation => {
        if (reservation) {
          this.selectedRoomType.set(reservation.roomType);
          this.nights.set(this.calculateNights(reservation.checkInDate, reservation.checkOutDate));
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  private calculateNights(checkIn: string, checkOut: string): number {
    if (!checkIn || !checkOut) {
      return 0;
    }
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.max(0, end.getTime() - start.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const values = this.reservationForm.value;
      const reservation: Reservation = {
        ...values,
        id: this.editingId ?? Date.now().toString(),
        pricePerNight: this.pricePerNight(),
        nights: this.nights(),
        totalPrice: this.totalPrice()
      };

      if (this.editingId) {
        this.store.dispatch(updateReservation({ id: this.editingId, reservation }));
      } else {
        this.store.dispatch(addReservation({ reservation }));
      }

      this.router.navigate(['/list']);
    }
  }

}
