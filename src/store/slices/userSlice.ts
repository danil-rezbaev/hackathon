import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { Company } from "../../types/Company";
import axios from "../../axios";

export const fetchAuthMe = createAsyncThunk('user/me', async () => {
  const { data } = await axios.post(`/user/me`)
  return data
})

type Methods = 'pending' | 'rejected' | 'fulfilled'

type Initial = {
  status: Methods,
  user: User
}

const initialState: Initial  = {
  status: 'pending',
  user: {
    email: "Аноним",
    company: null
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCompany(state, action: PayloadAction<Company>) {
      state.user.company = action.payload
    }
  },
  extraReducers: {
    [String(fetchAuthMe.pending)]: (state, action: PayloadAction<User>) => {
      state.status = "pending"
    },
    [String(fetchAuthMe.fulfilled)]: (state, action: PayloadAction<User>) => {
      state.user.email = action.payload.email
      state.user.company = action.payload.company
    },
    [String(fetchAuthMe.rejected)]: (state) => {
      state.status = "rejected"
    },
  }
})

export const { updateCompany } = userSlice.actions

export default userSlice.reducer
