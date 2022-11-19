import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    homeSort: {},
    loading: false,
    articles: [],
    current: null,
  },

  reducers: {},
  //   End of reducers object.....
});

export default articlesSlice.reducer;
