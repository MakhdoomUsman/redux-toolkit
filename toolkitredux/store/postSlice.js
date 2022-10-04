import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "Usman new post",
  },
  {
    id: "2",
    title: "Ali new post",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.post;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
