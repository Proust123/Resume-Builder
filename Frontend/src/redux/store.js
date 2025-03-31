// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './userSlice';


const store = configureStore({
  reducer: {
    forms: formReducer,
  },
});

export default store;
