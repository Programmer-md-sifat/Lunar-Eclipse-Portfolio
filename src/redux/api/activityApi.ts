import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  ActivityLog,
  CreateActivityPayload,
  ActivityQueryParams,
} from "../types";

export const activityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createActivityLog: builder.mutation<
      ApiResponse<ActivityLog>,
      CreateActivityPayload
    >({
      query: (body) => ({
        url: "/api/v1/activity",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Activity"],
    }),

    getAllActivityLogs: builder.query<
      ApiResponse<ActivityLog[]>,
      ActivityQueryParams | void
    >({
      query: (params) => ({
        url: "/api/v1/activity",
        method: "GET",
        params: params || {},
      }),
      providesTags: ["Activity"],
    }),

    getProjectActivityLogs: builder.query<
      ApiResponse<ActivityLog[]>,
      { projectId: string; page?: number; limit?: number }
    >({
      query: ({ projectId, page = 1, limit = 10 }) => ({
        url: `/api/v1/activity/project/${projectId}`,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["Activity"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateActivityLogMutation,
  useGetAllActivityLogsQuery,
  useLazyGetAllActivityLogsQuery,
  useGetProjectActivityLogsQuery,
  useLazyGetProjectActivityLogsQuery,
} = activityApi;
