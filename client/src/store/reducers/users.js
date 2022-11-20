import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, isAuth } from "../actions/users";

// Initial state before fetching api for users
let DEFAULT_STATE = {
  loading: false,
  data: {
    _id: null,
    email: null,
    firstname: null,
    lastname: null,
    age: null,
    role: null,
    verified: null,
  },
  auth: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: DEFAULT_STATE,

  reducers: {},
  //   End of reducers object.....

  // PS :Whenever your actions is returning back as async, don't put them in reducers, instead, use extraReducers

  extraReducers : (buider) => {
    buider
      // Register User...
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.auth = action.payload.auth;
      })

      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.auth = action.payload.auth;
      })

      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })

      // isAuth...
      .addCase(isAuth.pending, (state) => {
        state.loading = true;
      })
        .addCase(isAuth.fulfilled, (state, action) => {
          state.loading = false;
          state.data = { ...state.data, ...action.payload.data };
          state.auth = action.payload.auth;
        })
        .addCase(isAuth.rejected, (state) => {
          state.loading = false;
        });
}
})

export default usersSlice.reducer;
