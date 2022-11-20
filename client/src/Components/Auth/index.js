import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Util
import { errorHelper, Loader} from "../../Utils";

import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Thunk (Actions)
import { registerUser, loginUser } from "../../store/actions/users";

export const Auth = () => {
  //   Check for users registering or logining...
  const [register, setRegister] = useState(false);
    let navigate = useNavigate();


  //   Redux logic.....
  const users = useSelector((state) => state.users);
  const Dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

 

  // creating inputs using formik..
  const formik = useFormik({
    initialValues: {
      email: "",
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
        Dispatch(registerUser(values))
    }
    // Login...
    else {
     Dispatch(loginUser(values));
    }
  };

  // use this for redirect users on successfully login and show toast..
    useEffect(() => {
      if (notifications && notifications.global.success) {
        // redirect user...
        navigate("/dashboard");
      }
    }, [notifications, navigate]);

  return (
    <div className="auth_container">
      <h1>Authenticate</h1>

      {users.loading ? (
        <Loader wrapperStyle={{textAlign : "center"}}/>
      ) : (
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { width: "100%", marginTop: "20px" },
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            name="email"
            label="Enter your email"
            variant="outlined"
            {...formik.getFieldProps("email")}
            {...errorHelper(formik, "email")}
          />

          <TextField
            name="password"
            label="Enter your password"
            type="password"
            variant="outlined"
            {...formik.getFieldProps("password")}
            {...errorHelper(formik, "password")}
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
              variant="outlined"
              color="secondary"
              type="button"
              size="small"
              onClick={() => setRegister(!register)}
            >
              Want to {!register ? " Register " : "Login"}
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};
