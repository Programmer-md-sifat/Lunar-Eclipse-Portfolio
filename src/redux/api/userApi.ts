import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  User,
  RegisterPayload,
  UpdateProfilePayload,
  UserQueryParams,
} from "../types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<ApiResponse<User>, RegisterPayload>({
      query: (body) => ({
        url: "/api/v1/user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    getMyProfile: builder.query<ApiResponse<User>, void>({
      query: () => ({
        url: "/api/v1/user/my-profile",
        method: "GET",
      }),
      providesTags: ["User", "Auth"],
    }),

    getAllUsers: builder.query<ApiResponse<User[]>, UserQueryParams | void>({
      query: (params) => ({
        url: "/api/v1/user",
        method: "GET",
        params: params || {},
      }),
      providesTags: ["User"],
    }),

    getUserById: builder.query<ApiResponse<User>, string>({
      query: (id) => ({
        url: `/api/v1/user/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),

    updateProfile: builder.mutation<ApiResponse<User>, UpdateProfilePayload>({
      query: (body) => ({
        url: "/api/v1/user/me",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User", "Auth"],
    }),

    deleteUser: builder.mutation<ApiResponse<any>, string>({
      query: (id) => ({
        url: `/api/v1/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterUserMutation,
  useGetMyProfileQuery,
  useLazyGetMyProfileQuery,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} = userApi;
