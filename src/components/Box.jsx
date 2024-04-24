import React from "react";

export default function Box({ title, icon = "", text, custom = "" }) {
  return (
    <div
      className={`${custom ? `lg:${custom}` : ''} flex flex-col gap-y-3 items-center justify-center rounded-md bg-gray-50 cursor-pointer p-5 hover:bg-primary hover:text-gray-50 transition-colors duration-300 group`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 fill-gray-50 group-hover:fill-transparent  group-hover:stroke-gray-50 text-primary"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>

      <div >
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>

      <div>
        <span className="font-thin">{text}</span>
      </div>
    </div>
  );
}
