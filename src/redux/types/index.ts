// ==========================================
// Standard API Envelope & Pagination
// ==========================================
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  statusCode?: number;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPage?: number;
  };
}

// ==========================================
// 01. Auth Types
// ==========================================
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponseData {
  accessToken: string;
  refreshToken?: string;
  user?: User;
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerifyResetOtpPayload {
  email: string;
  otp: number | string;
}

export interface ResetPasswordPayload {
  email: string;
  newPassword: string;
}

export interface GoogleLoginPayload {
  idToken: string;
}

// ==========================================
// 02. User Types
// ==========================================
export type UserRole = "USER" | "ADMIN" | "SUPER_ADMIN" | string;
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCKED" | string;

export interface User {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  role?: UserRole;
  userStatus?: UserStatus;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
  country?: string;
  role?: string;
}

export interface UpdateProfilePayload {
  name?: string;
  phone?: string;
  country?: string;
  [key: string]: any;
}

export interface UserQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  userStatus?: string;
}

// ==========================================
// 03. About & Team Types
// ==========================================
export type DepartmentType =
  | "DIRECTOR_BODIES"
  | "MARCHENDISER_TEAM"
  | "ADMIN_AND_FINANCE"
  | "CREATIVE_DESIGN_AND_DEVELOPMENT"
  | "OTHERS"
  | string;

export interface BackendTeamMember {
  id?: string;
  _id?: string;
  name: string;
  designation: string;
  type: DepartmentType;
  order?: number;
  bio?: string;
  email?: string;
  phone?: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    github?: string;
    [key: string]: string | undefined;
  };
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface RoleWiseSection {
  id?: string;
  _id?: string;
  type: DepartmentType;
  title: string;
  subtitle?: string;
  order?: number;
  members: BackendTeamMember[];
}

export interface AboutSection {
  id?: string;
  _id?: string;
  type: DepartmentType;
  title: string;
  subtitle?: string;
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TeamMemberQueryParams {
  page?: number;
  limit?: number;
  type?: string;
  search?: string;
  isActive?: boolean | string;
}

export interface CreateTeamMemberPayload {
  name: string;
  designation: string;
  type: DepartmentType;
  order?: number;
  bio?: string;
  email?: string;
  phone?: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
  isActive?: boolean;
}

export interface CreateSectionPayload {
  type: DepartmentType;
  title: string;
  subtitle?: string;
  order?: number;
  isActive?: boolean;
}

// ==========================================
// 04. Upload (Cloudinary) Types
// ==========================================
export interface UploadSingleResponseData {
  url: string;
  secure_url?: string;
  public_id?: string;
  [key: string]: any;
}

export interface UploadMultipleResponseData {
  images?: Array<{ url: string; [key: string]: any }>;
  [key: string]: any;
}

// ==========================================
// 05. OTP Types
// ==========================================
export interface SendOtpPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: number | string;
}

// ==========================================
// 06. Activity Log Types
// ==========================================
export interface ActivityLog {
  id?: string;
  _id?: string;
  type: string;
  message: string;
  userId?: string;
  user?: User;
  projectId?: string;
  meta?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateActivityPayload {
  type: string;
  message: string;
  meta?: Record<string, any>;
}

export interface ActivityQueryParams {
  page?: number;
  limit?: number;
  type?: string;
  userId?: string;
}
