import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

import "./index.scss";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  return (
    <>
      <h2>RTK practice</h2>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>{t.text}</li>
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
