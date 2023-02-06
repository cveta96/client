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

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
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

export const logOutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLogoutMutation } = logOutApiSlice;
export const { useCheckMutation } = checkApiSlice;
export const { useRegisterMutation } = registerApiSlice;
export const { useLoginMutation } = authApiSlice;
