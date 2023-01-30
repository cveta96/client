import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const checkApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    check: builder.mutation({
      query: () => ({
        url: '/auth/check',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCheckMutation } = checkApiSlice;
export const { useLoginMutation } = authApiSlice;
