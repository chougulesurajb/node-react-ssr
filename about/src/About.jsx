import React from "react";
import { Header } from "dashboard/Header";
import { Sidebar } from "dashboard/Sidebar";
import diag from "./diag.png";

export const About = () => (
  <div className="mt-10 mx-auto max-w-6xl border-2 border-black rounded-2xl fixed top-[2rem] left-[20rem]">
    <Header title="About us" button="Go to dashboard" href="/dashboard" />
    <Sidebar items={["Contact us", "History"]} />
    <div className="z-10">
      <h1 className="p-4 text-3xl">About Us</h1>
      <p className="p-4">This is About us component</p>
      <div className="">
        <img className="w-[100rem]" src={diag} alt="ll"  height="20rem"/>
      </div>
    </div>
  </div>
);
