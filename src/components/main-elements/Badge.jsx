import React from "react";

function Badge({ numberOfItems, children }) {
  return (
    <div className="relative">
      <span className="text-custom-black absolute -right-2 -top-1 flex h-4 w-auto min-w-5  items-center justify-center rounded-lg bg-custom-white px-2 text-xs">
        {numberOfItems}
      </span>
      {children}
    </div>
  );
}

export default Badge;
