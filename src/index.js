import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/products">
    <App />
  </BrowserRouter>
);
