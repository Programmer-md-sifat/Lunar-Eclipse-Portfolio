import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export const isPrivilegedRole = (role?: string): boolean => {
  return role === "ADMIN" || role === "SUPER_ADMIN";
};

const getStoredToken = (): string | null => {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
};

const getStoredUser = (): User | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const rawToken = getStoredToken();
const rawUser = getStoredUser();
const isAuthorized = Boolean(rawUser && isPrivilegedRole(rawUser.role));

// If stored user is not an admin, immediately purge from localStorage
if (rawUser && !isAuthorized && typeof window !== "undefined") {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch {
    // ignore
  }
}

const initialState: AuthState = {
  token: isAuthorized ? rawToken : null,
  user: isAuthorized ? rawUser : null,
  isAuthenticated: Boolean(rawToken && isAuthorized),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; user?: User }>
    ) => {
      const { accessToken, user } = action.payload;

      // Reject non-admin roles from acquiring admin session
      if (user && !isPrivilegedRole(user.role)) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        try {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } catch (err) {
          console.error("Failed to clear non-admin auth in localStorage", err);
        }
        return;
      }

      state.token = accessToken;
      state.isAuthenticated = true;
      if (user) {
        state.user = user;
      }
      try {
        localStorage.setItem("token", accessToken);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      } catch (err) {
        console.error("Failed to persist auth to localStorage", err);
      }
    },
    setUser: (state, action: PayloadAction<User>) => {
      if (!isPrivilegedRole(action.payload.role)) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        try {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } catch {}
        return;
      }
      state.user = action.payload;
      try {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } catch (err) {
        console.error("Failed to persist user to localStorage", err);
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } catch (err) {
        console.error("Failed to clear auth in localStorage", err);
      }
    },
  },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

