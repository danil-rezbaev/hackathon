import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REACT_APP_SERVER_URL } from '../const'

const baseQuery = fetchBaseQuery({
  baseUrl: `${REACT_APP_SERVER_URL}/`
})

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  tagTypes: [],
  endpoints: () => ({})
})
