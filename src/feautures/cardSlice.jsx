import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  like: false,
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    like: (state) => {
      state.like = state.like ? false : true
    },
  },
})
export const { like } = cardSlice.actions
export default cardSlice.reducer
