import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AppServer from "./AppServer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AppServer />
  </React.StrictMode>
);
