import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, userType, allowedRoles, redirectPath, children }) => {
  if (isLoggedIn && allowedRoles.includes(userType)) {
    return children;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
};

export default ProtectedRoute;