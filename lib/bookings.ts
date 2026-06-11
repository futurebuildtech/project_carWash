// This file stores bookings in memory (in production, use a database)
interface Booking {
  id: string;
  date: string;
  time: string;
  city: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle: string;
}

let bookings: Booking[] = [];

export const addBooking = (booking: Booking) => {
  bookings.push(booking);
  return booking;
};

export const getBookings = () => bookings;

export const isSlotBooked = (date: string, time: string, city: string): boolean => {
  return bookings.some(
    (b) => b.date === date && b.time === time && b.city === city
  );
};

export const getBookingsByDate = (date: string, city: string) => {
  return bookings.filter((b) => b.date === date && b.city === city);
};

export const getAllBookings = () => bookings;
