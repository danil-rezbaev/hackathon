import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { Company } from "../../types/Company";

// export const fetchAuthMe = createAsyncThunk('auth/fetchLogin', async (type: AuthMethods, params) => {
//   const { data } = await axios.post(`/auth/${type}`, params)
//   return data
// })

const initialState: User = {
  email: null,
  company: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCompany(state, action: PayloadAction<Company>) {
      state.company = action.payload
    }
  },
  extraReducers: {
    // [String(fetchAuth.pending)]: (state) => {
    //   state.status = false
    //   state.token = null
    // },
    // [String(fetchAuth.fulfilled)]: (state, action: PayloadAction<{accessToken: string}>) => {
    //   const {accessToken} = action.payload
    //   state.token = accessToken
    //   state.status = true
    // },
    // [String(fetchAuth.rejected)]: (state) => {
    //   state.status = false
    //   state.token = null
    // },
  }
})

export const { updateCompany } = userSlice.actions

export default userSlice.reducer
