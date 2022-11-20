import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    global: {},
  },

  reducers: {
    errorGlobal: (state, action) => {
      state.global.error = true;
      state.global.message = action.payload;
    },

    successGlobal: (state, action) => {
      state.global.success = true;
      state.global.message = action.payload;
    },

    clearNotifications: (state, action) => {
      state.global.error = {};
      
    },
  },
  //   End of reducers object.....
});

export default notificationsSlice.reducer;
