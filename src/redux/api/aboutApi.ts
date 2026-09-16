import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  RoleWiseSection,
  BackendTeamMember,
  AboutSection,
  TeamMemberQueryParams,
  CreateTeamMemberPayload,
  CreateSectionPayload,
} from "../types";

export const aboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Role-Wise About / Team Sections (Public)
    getRoleWiseAbout: builder.query<ApiResponse<RoleWiseSection[]>, void>({
      query: () => ({
        url: "/api/v1/about/role-wise",
        method: "GET",
      }),
      providesTags: ["About", "Team", "Section"],
    }),

    // 2. Filtered Team Members List
    getAllTeamMembers: builder.query<
      ApiResponse<BackendTeamMember[]>,
      TeamMemberQueryParams | void
    >({
      query: (params) => ({
        url: "/api/v1/about",
        method: "GET",
        params: params || {},
      }),
      providesTags: ["Team"],
    }),

    // 3. Team Member by ID
    getTeamMemberById: builder.query<ApiResponse<BackendTeamMember>, string>({
      query: (id) => ({
        url: `/api/v1/about/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Team", id }],
    }),

    // 4. Create Team Member (Admin)
    createTeamMember: builder.mutation<
      ApiResponse<BackendTeamMember>,
      CreateTeamMemberPayload
    >({
      query: (body) => ({
        url: "/api/v1/about",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Team", "About"],
    }),

    // 5. Update Team Member (Admin)
    updateTeamMember: builder.mutation<
      ApiResponse<BackendTeamMember>,
      { id: string; data: Partial<CreateTeamMemberPayload> }
    >({
      query: ({ id, data }) => ({
        url: `/api/v1/about/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Team", "About"],
    }),

    // 6. Delete Team Member (Admin)
    deleteTeamMember: builder.mutation<ApiResponse<any>, string>({
      query: (id) => ({
        url: `/api/v1/about/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Team", "About"],
    }),

    // 7. Get All Sections (Admin / Public)
    getAllSections: builder.query<ApiResponse<AboutSection[]>, void>({
      query: () => ({
        url: "/api/v1/about/section",
        method: "GET",
      }),
      providesTags: ["Section", "About"],
    }),

    // 8. Get Section By ID
    getSectionById: builder.query<ApiResponse<AboutSection>, string>({
      query: (id) => ({
        url: `/api/v1/about/section/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Section", id }],
    }),

    // 9. Create Section (Admin)
    createSection: builder.mutation<
      ApiResponse<AboutSection>,
      CreateSectionPayload
    >({
      query: (body) => ({
        url: "/api/v1/about/section",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Section", "About"],
    }),

    // 10. Update Section (Admin)
    updateSection: builder.mutation<
      ApiResponse<AboutSection>,
      { id: string; data: Partial<CreateSectionPayload> }
    >({
      query: ({ id, data }) => ({
        url: `/api/v1/about/section/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Section", "About"],
    }),

    // 11. Delete Section (Admin)
    deleteSection: builder.mutation<ApiResponse<any>, string>({
      query: (id) => ({
        url: `/api/v1/about/section/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Section", "About"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRoleWiseAboutQuery,
  useLazyGetRoleWiseAboutQuery,
  useGetAllTeamMembersQuery,
  useLazyGetAllTeamMembersQuery,
  useGetTeamMemberByIdQuery,
  useLazyGetTeamMemberByIdQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useGetAllSectionsQuery,
  useLazyGetAllSectionsQuery,
  useGetSectionByIdQuery,
  useLazyGetSectionByIdQuery,
  useCreateSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} = aboutApi;
