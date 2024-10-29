import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl w-full">
    <Header title="Dashboard" button="Go to About us" href="/about" />
    <Sidebar items={["All Products", "All Services"]} />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
