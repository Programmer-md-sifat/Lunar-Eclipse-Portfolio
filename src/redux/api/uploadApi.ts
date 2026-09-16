import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  UploadSingleResponseData,
  UploadMultipleResponseData,
} from "../types";

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingleImage: builder.mutation<
      ApiResponse<UploadSingleResponseData>,
      FormData
    >({
      query: (formData) => ({
        url: "/api/v1/upload",
        method: "POST",
        body: formData,
      }),
    }),

    uploadMultipleImages: builder.mutation<
      ApiResponse<UploadMultipleResponseData>,
      FormData
    >({
      query: (formData) => ({
        url: "/api/v1/upload/multiple",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useUploadSingleImageMutation,
  useUploadMultipleImagesMutation,
} = uploadApi;
