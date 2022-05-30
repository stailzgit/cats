import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { ROUTES } from "../../router/routesConsts";

const Navbar = () => {
  const location = useLocation();

  const styleNavbarItem = (route: string) =>
    "navbar__item" +
    (location.pathname === route ? " navbar__item--current" : "");

  return (
    <div className="navbar__wrap">
      <div className="container">
        <div className="navbar">
          <Link to={ROUTES.CATS}>
            <div className={styleNavbarItem(ROUTES.CATS)}>Все котики</div>
          </Link>

          <Link to={ROUTES.FAVORITES}>
            <div className={styleNavbarItem(ROUTES.FAVORITES)}>
              Любимые котики
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
