import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
import { api } from './api'
// import globalReducer from './global/globalSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // global: globalReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
