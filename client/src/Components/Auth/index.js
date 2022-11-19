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

      password: Yup.string().required(
        "Password is required for your safety..."
      ),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    // Dispatch for registering users
    if (register) {
      console.log(values, "Registering....");
    }
    // Login...
    else {
      console.log(values, "Logining....");
    }
  };

  return (
    <div className="auth_container">
      <h1>Authenticate</h1>

      <Box
        component={"form"}
        sx={{
          "& .MuiTextField-root": { width: "100%", marginTop: "20px" },
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          name="email"
          label="Enter your email."
          //   fullwidth= "true"
          variant="outlined"
          {...formik.getFieldProps("email")}
        />

        <TextField
          name="password"
          label="Enter your password."
          //   fullwidth= "true"
          variant="outlined"
          type={"password"}
          {...formik.getFieldProps("password ")}
        />

        <div className="mt-2">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            {register ? " Register " : "Login"}
          </Button>

          <Button
            className="mt-3"
            variant="contained"
            color="secondary"
            type="button"
            size="small"
            onClick = {()=>setRegister(!register)}
          >
            Want to {!register ? " Register " : "Login"}
          </Button>
        </div>
      </Box>
    </div>
  );
};
