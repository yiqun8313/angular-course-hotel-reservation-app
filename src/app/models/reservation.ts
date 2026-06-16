export type RoomType = 'single' | 'double' | 'suite';

export const RoomPrice: Record<RoomType, number> = {
  single: 100,
  double: 150,
  suite: 250
};

export interface Reservation {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  guestName: string;
  guestEmail: string;
  roomNumber: number;
  roomType: RoomType;
  pricePerNight: number;
  nights: number;
  totalPrice: number;
}
