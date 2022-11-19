import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Auth = () => {
  //   Check for users registering or logining...
  const [register, setRegister] = useState(false);

  // creating inputs using formik..
  const formik = useFormik({
    initialValues: {
      emaiil: "",
      password: "",
    },
    validationSchema: Yup.object({
      // Validator.....
      email: Yup.string()
        .required("Sorry, kindly provide email,cause, it's important")
        .email("Sorry, not a valid email..."),

        password : Yup.string()
        .required("Password is required for your safety...")
    }),

    onSubmit : (values)=> {
        handleSubmit(values)
    }
  });

  const handleSubmit= (values) => {
    // Dispatch for registering users
    if(register) {
     console.log(values, "Registering....")
    }
    // Login...
    else {
       console.log(values, "Logining....");
    }
  }

  return ( <div className="auth_container">
        <h1>Authenticate</h1>

        <Box
          component = {"form"}
          sx= {{}}
          onSubmit={formik.handleSubmit}
        >
            <TextField name="email"
             label="Enter your email." 
             fullwidth
             variant="outlined"/>
        </Box>
  </div>
   );
};
