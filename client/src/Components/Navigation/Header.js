import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { SideNav } from "./SideNav";
import { clearNotifications } from "../../store/reducers/notifications";
import { showToast } from "../../Utils";
import {signOut } from "../../store/actions/users"

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);
  const site = useSelector(state=>state.site)
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  // useEffect For Pathname
  useEffect( ()=> {
    // Checking for dashboard path..
    let pathname = location.pathname.split("/")
    console.log(pathname)

    if(pathname[1] ===  "dashboard") {

    }else {

    }
    
  },[location.pathname])

  // Checking for change in notifications
  useEffect(() => {
    let { global } = notifications;

    if (notifications && global.error) {
     const msg = global.msg ? global.msg : "Error";
     showToast("ERROR",msg)
       dispatch(clearNotifications());
    }

    if (notifications && global.success) {
       const msg = global.msg ? global.msg : "Excellent.";
       showToast("SUCCESS", msg);
       dispatch(clearNotifications());
    }
  }, [notifications, dispatch]);


  const SignOutUser = () => {
    dispatch(signOut())
    navigate("/")
  }
  return (
    <nav className="navbar fixed-top">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center fredoka_ff"
      >
        Flickbase
      </Link>
      <SideNav users={users} SignOutUser={SignOutUser}/>
    </nav>
  );
};
