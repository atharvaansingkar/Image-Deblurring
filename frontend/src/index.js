import React from "react";
import ReactDOM from "react-dom/client"; // Use the new ReactDOM API
import { HashRouter } from "react-router-dom"; // Import HashRouter
import App from "./App";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);