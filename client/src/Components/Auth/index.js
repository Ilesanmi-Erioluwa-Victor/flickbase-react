import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import  Button  from "@mui/material/Butt";


export const Auth = () => {
    //   Check for users registering or logining...
    const [register, setRegister ] = useState(false);

    // creating inputs using formik..
    const formik = useFormik({
     initialValues : {
        emaiil : "",
        password : ""
     },
     validationSchema : Yup.object({
        // Validator.....
        email : Yup.string().required("Sorry, kindly provide email,cause, it's important")
     })
    })
  return <div>AUTH .....</div>;
};
