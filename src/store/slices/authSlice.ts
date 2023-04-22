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
  status: true,
  token: "null"
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

export const { logout } = authSlice.actions

export default authSlice.reducer
