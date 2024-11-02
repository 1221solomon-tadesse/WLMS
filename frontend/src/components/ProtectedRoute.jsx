import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  const isAuthenticated = token !== null;
  const hasAccess = allowedRoles.includes(userRole); 
  return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;