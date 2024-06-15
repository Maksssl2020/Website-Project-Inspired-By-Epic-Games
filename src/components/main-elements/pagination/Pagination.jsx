import React from "react";
import PaginationItem from "./PaginationItem.jsx";
import ChevronLeftIcon from "../icons/ChevronLeftIcon.jsx";
import ChevronRightIcon from "../icons/ChevronRightIcon.jsx";

function Pagination({ pagesMaxNumber }) {
  const amountOfPaginationItems = Array.from(
    { length: 7 },
    (_, index) => index + 1,
  );

  return (
    <div className="mt-8 flex w-full justify-center space-x-4 font-medium hover:outline-none">
      <div className="flex justify-center space-x-4 text-custom-gray-100">
        <ChevronLeftIcon />
        {amountOfPaginationItems.map((number, index) => (
          <PaginationItem key={index} pageNumber={number} />
        ))}
        <PaginationItem pageNumber="..." />
        <PaginationItem pageNumber={pagesMaxNumber} />
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default Pagination;
