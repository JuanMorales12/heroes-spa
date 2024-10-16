import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { basePath } from "../../config";

export const AppRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path={`${basePath}/login/*`}
            element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path= {`${basePath}/*`}
            element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            }
          />
        </Routes>
      </div>
    </>
  );
};
