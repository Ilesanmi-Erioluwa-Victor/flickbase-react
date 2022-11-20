import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav } from "./SideNav";
import { clearNotifications } from "../../store/reducers/notifications";

export const Header = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  // Checking for change in notifications
  useEffect(() => {
    let { global } = notifications;

    if (notifications && global.error) {
      console.log("error");
       dispatch(clearNotifications());
    }

    if (notifications && global.success) {
      console.log("success...");
       dispatch(clearNotifications());
    }
  }, [notifications, dispatch]);
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
