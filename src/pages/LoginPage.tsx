import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch, logout } from "../redux";
import { AdminLogin } from "./admin/AdminLogin";

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const isPrivileged = user?.role === "ADMIN" || user?.role === "SUPER_ADMIN";
    if (isAuthenticated || token) {
      if (isPrivileged) {
        navigate("/admin");
      } else {
        dispatch(logout());
      }
    }
  }, [isAuthenticated, user, token, navigate, dispatch]);

  return <AdminLogin />;
}

export default LoginPage;

