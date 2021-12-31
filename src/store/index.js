import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slice/users'

export default configureStore({
  reducer: {
    users: userReducer,
  },
})