import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";
import { basePath } from "../../config";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  return <>{logged ? children : <Navigate to={`${basePath}/login`} />}</>;
};
