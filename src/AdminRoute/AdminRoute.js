import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Shared/Loading/Loading";
import { AuthContext } from "./../contexts/AuthProvider";
import useAdmin from "./../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
