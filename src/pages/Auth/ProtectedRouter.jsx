import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../components/contexts/Redirect";

function ProtectedRouter({ children }) {
  const user = useAuth();

  return user ? children : <Navigate to="/" />;
}

export default ProtectedRouter;
