import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import userRedcuers from "./usersSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userRedcuers,
  },
});
