import React from "react";
import ReactDOM from "react-dom/client";

import { About } from "./About";

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <About />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
