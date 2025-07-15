import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doctor: null,
    clinic: null,
    slot: null, 
}

const databaseSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
    setBookingDoctor: (state, action) => {
      state.doctor = action.payload;
    },
    setBookingClinic: (state, action) => {
      state.clinic = action.payload;
    },
    setBookingSlot: (state, action) => {
      state.slot = action.payload;
    },
    resetBooking: (state) => {
      state.doctor = null;
      state.clinic = null;
      state.slot = null;
    },
  },
});

export const {
  setBookingDoctor,
  setBookingClinic,
  setBookingSlot,
  resetBooking,} = databaseSlice.actions;

export default databaseSlice.reducer;