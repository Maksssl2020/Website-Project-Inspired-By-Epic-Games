import React from "react";
import { Link } from "react-router-dom";

function PegiInfoButton({ pegiInfo }) {
  const { pegiImage, pegiTitle, pegiDescription } = pegiInfo;

  return (
    <button className="rounded-lg border-2 border-custom-white hover:border-custom-emerald">
      <Link
        to="https://www.globalratings.com/ratingsguide.aspx#pegi"
        target="_blank"
      >
        <div className="flex p-4 hover:bg-custom-gray-100 hover:bg-opacity-20">
          <img
            alt={pegiTitle}
            className="w-10 border-2 border-custom-white"
            src={pegiImage}
          />
          <div className="ml-4">
            <p className="flex font-bold text-custom-white">{pegiTitle}</p>
            <p className="flex text-custom-gray-100">{pegiDescription}</p>
          </div>
        </div>
      </Link>
    </button>
  );
}

export default PegiInfoButton;
