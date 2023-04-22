import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import JobsReducer from './slices/jobsSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    jobs: JobsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
