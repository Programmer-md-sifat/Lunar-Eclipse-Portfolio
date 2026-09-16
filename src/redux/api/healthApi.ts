import { baseApi } from "./baseApi";
import type { ApiResponse } from "../types";

export const healthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkServerStatus: builder.query<ApiResponse<any> | string, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCheckServerStatusQuery, useLazyCheckServerStatusQuery } = healthApi;
