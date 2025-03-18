import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cookieManager } from '../utils/cookie.ts';

export const houseBankApi = createApi({
  reducerPath: 'houseBankApi',
  tagTypes: ['auth', 'properties'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BACKEND_HOST,
    prepareHeaders: (headers: Headers) => {
      const token = cookieManager.get('hb_user_token');
      if (!headers.has('Authorization') && token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      loginInUser: builder.mutation({
        query: (userCredentials: { userName: string; password: string }) => ({
          url: `auth/signin`,
          method: 'POST',
          body: userCredentials,
        }),
        transformResponse: (response: { data: any }) => response.data,
        invalidatesTags: ['auth'],
      }),
      registerUser: builder.mutation({
        query: (user: any) => ({
          url: `auth/signup`,
          method: 'POST',
          body: { ...user },
        }),
        transformResponse: (response: { data: any }) => response.data,
        invalidatesTags: ['auth'],
      }),
      logoutUser: builder.mutation({
        query: () => ({
          url: `auth/logout`,
          method: 'POST',
        }),
        invalidatesTags: ['auth'],
      }),
    };
  },
});

export const {
  useLoginInUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = houseBankApi;

export const { endpoints, reducerPath, reducer, middleware } = houseBankApi;
