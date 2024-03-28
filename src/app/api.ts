import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  tagTypes: ["User"],
  endpoints: builder => ({
    getUser: builder.query<{ data: User }, { id: number }>({
      query: ({ id }) => `users/${id}`,
      providesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery } = api
