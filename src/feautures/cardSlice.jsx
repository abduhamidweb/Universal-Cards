import { createSlice } from '@reduxjs/toolkit'
const initilaValue = {
  like: false,
}
export const cardSlice = createSlice({
  name: 'card',
  initilaValue,
  reducers: {
    like: (state) => {
      state.like = state.like ? false : true
    },
  },
})
export const { like } = cardSlice.actions
export default cardSlice.reducer
