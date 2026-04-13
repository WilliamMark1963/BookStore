import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "./mockData";
const booksList = createSlice({
  name: "books",
  initialState: {
    items: [...mockData],
  },
  reducers: {
    addBook: (state, action) => {
      // action.payload will be the book object from our form
      state.items.unshift({
        ...action.payload,
       id: Date.now(), // Simple ID generation
      });
    },
  },
});
export const { addBook } = booksList.actions;
export default booksList.reducer;
