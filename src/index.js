import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/normalize.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>
  // </BrowserRouter>
);
