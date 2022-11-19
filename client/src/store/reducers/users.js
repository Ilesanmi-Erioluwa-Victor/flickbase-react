import { createSlice } from "@reduxjs/toolkit";

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

  reducers : {

  }
//   End of reducers object.....

});

export default usersSlice.reducer