import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import JobsReducer from './slices/jobsSlice'
import jobsHistoryReducer from './slices/jobsHistorySlice'
import UserReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    jobs: JobsReducer,
    jobsHistory: jobsHistoryReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
