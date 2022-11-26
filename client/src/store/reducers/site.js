import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    layout: "",
  },

  reducers: {
    setLayout : (state, action ) => {
      state.layout = action.payload
    }
  },
  //   End of reducers object.....
});

export const { setLayout } = siteSlice.actions

export default siteSlice.reducer;
