import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorGlobal, successGlobal } from "../reducers/notifications";
import { getAuthHeader, removeTokenCookie } from "../../Utils";

// thunk for registering Users
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(`/api/auth/register`, {
        email: email,
        password: password,
      });

      dispatch( successGlobal("Welcome on board, check your email to validate your account.."))
      return { data: response.data.user, auth: true };
    } catch (error) {
      dispatch(
        errorGlobal(error.response.data.message)
      );
      throw error;
    }
  }
);

// thunk for registering Users
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(`/api/auth/signin`, {
        email: email,
        password: password,
      });

         dispatch(
           successGlobal(
             "Welcome ..."
           )
         );
      return { data: response.data.user, auth: true };
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);


// thunk for autoSignin Users

export const isAuth = createAsyncThunk("users/isAuth", async () => {
  try {
    const request = await axios.get("/api/auth/isauth", getAuthHeader());
    return { data: request.data, auth: true };
  } catch (error) {
    return { data: {}, auth: false };
  }
});


