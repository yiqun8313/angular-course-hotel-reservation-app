import { Reservation } from '../models/reservation';

export interface ReservationState {
  reservations: Reservation[];
}

export const reservationFeatureKey = 'reservations';

export const initialReservationState: ReservationState = {
  reservations: []
};
