import React from "react";
import { Outlet } from "react-router-dom";

const PrivaateRoute = ({ allowedRoles }) => {
  return <Outlet />;
};

export default PrivaateRoute;
