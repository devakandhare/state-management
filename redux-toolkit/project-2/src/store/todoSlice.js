import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    { id: 1, text: "one task" },
    { id: 2, text: "two task" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
