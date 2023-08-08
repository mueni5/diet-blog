import { configureStore } from "@reduxjs/toolkit";



import patientsReducer from './Features/patientsSlice'
import appointmentsReducer from './Features/appointmentsSlice'
import resultsReducer from "./Features/resultsSlice";

const store = configureStore({
  reducer: {
    
    patients: patientsReducer,
    appointments: appointmentsReducer,
    results: resultsReducer
  },
});

export default store;