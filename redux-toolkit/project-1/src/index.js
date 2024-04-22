import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./index.scss";
import store from "./store/store";
import { addTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(fetchTodos);
  const [task, setTask] = useState("");

  return (
    <>
      <h1>this is react application integrated with redux-toolkit(RTK)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo({ id: new Date().getTime(), name: task }));
          setTask("");
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
