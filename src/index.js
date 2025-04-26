// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // ✅ use createRoot instead of render
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

// Get the root DOM element
const container = document.getElementById("root");

// Create a root and render the app
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
