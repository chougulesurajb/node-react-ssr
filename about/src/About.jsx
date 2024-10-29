import React from "react";
import { Header } from "dashboard/Header";
import { Sidebar } from "dashboard/Sidebar";

export const About = () => (
  <div className="mt-10 mx-auto max-w-6xl border-2 border-black rounded-2xl fixed bottom-4 right-4">
    <Header title="About us" button="Go to dashboard" href="/dashboard" />
    <Sidebar items={["Contact us", "History"]} />
    <h1 className="p-4 text-3xl">About Us</h1>
    <p className="p-4">This is About us component</p>
  </div>
);
