import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      name: "complete homework",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const fetchTodos = (state) => state.todoReducer.todo;

export default todoSlice.reducer;
