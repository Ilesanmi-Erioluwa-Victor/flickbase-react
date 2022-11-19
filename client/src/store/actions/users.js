import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// thunk for registering Users
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(`/api/auth/register`, {
        email: email,
        password: password,
      });

      return { data: response.data.user, auth: true };
    } catch (error) {
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

      return { data: response.data.user, auth: true };
    } catch (error) {
      throw error;
    }
  }
);
