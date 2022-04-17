import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/Auth/auth-context";

export const RequiresAuth = ({ children }) => {
  const {
    login: { isLogIn },
  } = useAuth();
  return isLogIn ? children : <Navigate to="/login" replace />;
};
