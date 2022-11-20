import React from "react";
import { Link } from "react-router-dom";
import { SideNav } from "./SideNav";

import { useSelector, useDispatch } from "react-redux";

export const Header = () => {

  const notifications = useSelector( (state) =>state.notifications)
  const Dispatch = useDispatch();
  return (
    <nav className="navbar fixed-top">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center fredoka_ff"
      >
        Flickbase
      </Link>
      <SideNav />
    </nav>
  );
};
