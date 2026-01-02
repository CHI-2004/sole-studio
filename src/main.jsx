import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// The error happens because the code is trying to use 'BrowserRouter' 
// on line 7, but it isn't defined in this file.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);