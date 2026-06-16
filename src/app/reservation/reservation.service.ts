import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  // CRUD

  getReservations(): Observable<Reservation[]> {
    return of(this.reservations);
  }

  getReservation(id: string): Observable<Reservation | undefined> {
    return of(this.reservations.find(res => res.id === id));
  }

  addReservation(reservation: Reservation): Observable<Reservation> {

    const newReservation = {
      ...reservation,
      id: Date.now().toString()
    };

    this.reservations.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
    return of(newReservation);
  }

  deleteReservation(id: string): Observable<string> {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
    return of(id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<Reservation> {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
    return of(updatedReservation);
  }
  
}
