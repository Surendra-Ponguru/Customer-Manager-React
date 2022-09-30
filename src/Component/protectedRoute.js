import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Auth from "../Auth";

const ProtectedRoute = () => {
  const location = useLocation();
  return Auth.isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;