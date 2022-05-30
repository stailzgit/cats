import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routesConsts";
import Cats from "../pages/Cats/Cats";
import Favorites from "../pages/Favorites/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.CATS} element={<Cats />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
