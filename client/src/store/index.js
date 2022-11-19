import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./reducers/users"
import ArticlesReducer from "./reducers/articles";
import NotificationsReducer from "./reducers/notifications";


export const store = configureStore({
  reducer: {
    users : UsersReducer,
    articles : ArticlesReducer,
    notifications : NotificationsReducer
  },
  
});
