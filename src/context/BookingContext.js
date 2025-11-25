import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    const bookingEntry = {
      ...newBooking,
      id: Date.now().toString(),
      bookingDate: new Date().toISOString()
    };
    setBookings((prev) => [bookingEntry, ...prev]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);