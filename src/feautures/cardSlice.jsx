import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  like: false,
  i1: 0,
  i2: 0,
  i3: 0,
  i4: 0,
  i5: 0,
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    likes: (state) => {
      state.like = state.like ? false : true
    },
    i12: (state) => {
      state.i1 += 1
    },
    i22: (state) => {
      state.i2 += 1
    },
    i32: (state) => {
      state.i3 += 1
    },
    i42: (state) => {
      state.i4 += 1
    },
    i52: (state) => {
      state.i5 += 1
    },
  },
})
export const { likes, i12, i22, i32, i42, i52 } = cardSlice.actions
export default cardSlice.reducer
