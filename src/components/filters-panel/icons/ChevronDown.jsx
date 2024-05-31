import React from "react";

function ChevronDown({ isActive = undefined }) {
  return (
    <svg
      className={`h-6 w-6 transition-transform duration-300 group-hover:text-white ${isActive ? "rotate-180" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default ChevronDown;
