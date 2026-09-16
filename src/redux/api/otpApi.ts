import { baseApi } from "./baseApi";
import type { ApiResponse, SendOtpPayload, VerifyOtpPayload } from "../types";

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<ApiResponse<any>, SendOtpPayload>({
      query: (body) => ({
        url: "/api/v1/otp/send",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: builder.mutation<ApiResponse<any>, VerifyOtpPayload>({
      query: (body) => ({
        url: "/api/v1/otp/verify",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendOtpMutation, useVerifyOtpMutation } = otpApi;
