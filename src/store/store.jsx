import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feautures/cardSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
