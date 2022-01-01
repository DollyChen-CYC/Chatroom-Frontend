import { createSlice } from '@reduxjs/toolkit'

// const dummyUser = {
//   id: 1,
//   name: 'Tommy',
//   account: 'user1',
//   password: '12345678',
//   avatar: '',
//   online: true,
// }

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: {
      id: -1,
      name: '',
      account: '',
      password: '',
      avatar: '',
      online: false,
    },
    isAuthenticated: false,
    token: '',
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer