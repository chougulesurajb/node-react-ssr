import React from "react";

export const Sidebar = ({items}) => (
  <div className="fixed w-60 h-full top-[65px] left-0 flex flex-col items-start justify-start bg-green-200 p-8">
    {items.map((item) => (
      <p key={item} className="w-full text-lg border-b-2">{item}</p>
    ))}
  </div>
);
