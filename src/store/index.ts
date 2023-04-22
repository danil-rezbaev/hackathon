import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import UserReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
