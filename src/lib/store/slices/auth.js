import { createSlice } from '@reduxjs/toolkit'

const data = localStorage.getItem('note_token') ? JSON.parse(localStorage.getItem('note_token')) : null


const initialState = {
  data,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('note_token', JSON.stringify(action.payload))
      state.data = action.payload
    },
    logout: (state) => {
      localStorage.removeItem('note_token')
      state.data = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
