import React from "react";
import GenreImages from "./GenreImages.jsx";

function Genre({ genreName, images }) {
  return (
    <div className="flex flex-col justify-center rounded-lg border-2 border-custom-emerald transition-colors duration-300 hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-15 3xs:h-[165px] sm:h-[200px] sm:w-[220px] md:h-[250px] md:w-[270px]">
      <GenreImages images={images} />
      <div className="mt-4 flex h-[30px] w-full justify-center">
        <h2 className="font-medium text-custom-white 3xs:text-sm sm:text-lg md:text-2xl">
          {genreName}
        </h2>
      </div>
    </div>
  );
}

export default Genre;
