import React from "react";
import "./index.scss";

export const Header = ({ title, button, href }) => (
  <div className="h-10 fixed top-0 left-0 flex items-center justify-around w-full bg-gray-500 p-8">
    <div className="flex justify-start w-full p-4">
      <h1 className="p-4 text-3xl">{title}</h1>
    </div>
    {button && (
      <div className="flex justify-end w-full p-4 text-lg">
        <a href={href} className="bg-slate-400 p-4">{button}</a>
      </div>
    )}
  </div>
);
