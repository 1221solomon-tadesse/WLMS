import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  const isAuthenticated = token !== null; // Check if the token exists
  const hasAccess = allowedRoles.includes(userRole); // Check if the user's role is allowed

  return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;