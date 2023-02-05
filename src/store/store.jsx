import { configureStore } from '@reduxjs/toolkit'
import cardReducer from "../feautures/cardSlice"
export const store = configureStore({
    reducer: {
      cardSections: cardReducer,
  },
})
