import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "usman",
  },
  {
    id: "1",
    name: "ali",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
