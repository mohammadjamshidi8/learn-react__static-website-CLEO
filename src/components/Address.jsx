import React from "react";

export default function Address({title,text}) {
  return (
    <div className="flex flex-col gap-y-2 bg-primary text-white p-3 rounded-md">
      <span className="font-bold text-xl">{title}</span>
      <span className="text-white text-opacity-50 font-thin">{text}</span>
    </div>
  );
}
