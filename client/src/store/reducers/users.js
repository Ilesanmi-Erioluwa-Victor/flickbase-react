import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/users";

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

  // PS :Wheenever your actions is returning back as async, don't put them in reducers, instead, use extraReducers

  extraReducers : (buider) => {
    buider
    // Register User...
    .addCase(registerUser.pending, (state)=>{

    }) 
  }
});

export default usersSlice.reducer;
