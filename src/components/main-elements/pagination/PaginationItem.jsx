import React from "react";

function PaginationItem({ pageNumber }) {
  return (
    <button className="font-medium text-custom-gray-100 focus-within:scale-110 focus-within:text-custom-emerald hover:text-custom-emerald">
      {pageNumber}
    </button>
  );
}

export default PaginationItem;
