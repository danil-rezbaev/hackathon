import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import JobsReducer from './slices/jobsSlice'
import jobsHistoryReducer from './slices/jobsHistorySlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    jobs: JobsReducer,
    jobsHistory: jobsHistoryReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
