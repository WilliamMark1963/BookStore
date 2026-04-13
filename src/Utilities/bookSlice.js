import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "./mockData";
const booksList = createSlice({
  name: "books",
  initialState: {
    items: [...mockData],
  },
  reducers: {
    addBook: (state, action) => {
      // add at front like queue DS and Date as ID for new books
      state.items.unshift({
        ...action.payload,
       id: Date.now(), 
      });
    },
  },
});
export const { addBook } = booksList.actions;
export default booksList.reducer;
