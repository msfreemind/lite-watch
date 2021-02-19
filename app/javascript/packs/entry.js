import React from 'react';
import ReactDOM from "react-dom";
import Root from '../frontend/components/root.jsx';
import configureStore from "../frontend/store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});