import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  AuthResponseData,
  LoginCredentials,
  ChangePasswordPayload,
  ForgotPasswordPayload,
  VerifyResetOtpPayload,
  ResetPasswordPayload,
  GoogleLoginPayload,
  User,
} from "../types";
import { setCredentials, logout as logoutAction } from "../features/auth/authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<AuthResponseData>, LoginCredentials>({
      query: (credentials) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const userRole = data?.data?.user?.role;
          const isPrivileged = userRole === "ADMIN" || userRole === "SUPER_ADMIN";

          if (!isPrivileged) {
            // Normal user accounts ("USER") are strictly rejected from admin auth
            dispatch(logoutAction());
            return;
          }

          if (data?.data?.accessToken) {
            dispatch(
              setCredentials({
                accessToken: data.data.accessToken,
                user: data.data.user,
              })
            );
          }
        } catch (err) {
          // ignore or handle in caller
        }
      },
    }),

    getMe: builder.query<ApiResponse<User>, void>({
      query: () => ({
        url: "/api/v1/auth/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const userRole = data?.data?.role;
          if (userRole && userRole !== "ADMIN" && userRole !== "SUPER_ADMIN") {
            dispatch(logoutAction());
          }
        } catch {
          // ignore
        }
      },
    }),

    changePassword: builder.mutation<ApiResponse<any>, ChangePasswordPayload>({
      query: (body) => ({
        url: "/api/v1/auth/change-password",
        method: "PATCH",
        body,
      }),
    }),

    forgotPassword: builder.mutation<ApiResponse<any>, ForgotPasswordPayload>({
      query: (body) => ({
        url: "/api/v1/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),

    verifyResetOtp: builder.mutation<ApiResponse<any>, VerifyResetOtpPayload>({
      query: (body) => ({
        url: "/api/v1/auth/verify-reset-otp",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation<ApiResponse<any>, ResetPasswordPayload>({
      query: (body) => ({
        url: "/api/v1/auth/reset-password",
        method: "POST",
        body,
      }),
    }),

    googleLogin: builder.mutation<ApiResponse<AuthResponseData>, GoogleLoginPayload>({
      query: (body) => ({
        url: "/api/v1/auth/google",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const userRole = data?.data?.user?.role;
          const isPrivileged = userRole === "ADMIN" || userRole === "SUPER_ADMIN";

          if (!isPrivileged) {
            dispatch(logoutAction());
            return;
          }

          if (data?.data?.accessToken) {
            dispatch(
              setCredentials({
                accessToken: data.data.accessToken,
                user: data.data.user,
              })
            );
          }
        } catch {
          // ignore
        }
      },
    }),

    logout: builder.mutation<ApiResponse<any>, void>({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } finally {
          dispatch(logoutAction());
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation,
  useGoogleLoginMutation,
  useLogoutMutation,
} = authApi;
