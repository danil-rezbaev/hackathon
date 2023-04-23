import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { AuthMethods } from "../../types/Auth";

export const fetchAuth = createAsyncThunk('auth/fetchLogin', async (type: AuthMethods, params) => {
  const { data } = await axios.post(`/auth/${type}`, params)
  return data
})

export type Auth = {
  status: boolean,
  token: string | null
}

const initialState: Auth = {
  status: false,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout (state) {
      state.status = false
      state.token = null
      window.localStorage.clear()
    },
    updateAuth(state, action: PayloadAction<{accessToken: string}>) {
      state.status = true
      state.token = action.payload.accessToken
      window.localStorage.setItem('token', action.payload.accessToken)
    }
  },
  extraReducers: {
    [String(fetchAuth.pending)]: (state) => {
      state.status = false
      state.token = null
    },
    [String(fetchAuth.fulfilled)]: (state, action: PayloadAction<{accessToken: string}>) => {
      const {accessToken} = action.payload
      state.token = accessToken
      state.status = true
    },
    [String(fetchAuth.rejected)]: (state) => {
      state.status = false
      state.token = null
    },
  }
})

export const { logout, updateAuth } = authSlice.actions

export default authSlice.reducer
