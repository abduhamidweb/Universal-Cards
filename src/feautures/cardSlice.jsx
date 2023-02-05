import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  like: false,
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    likes: (state) => {
      state.like = state.like ? false : true
    },
  },
})
export const { likes } = cardSlice.actions
export default cardSlice.reducer
