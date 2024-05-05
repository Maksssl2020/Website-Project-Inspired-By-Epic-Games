import React from "react";
import GenreImages from "./GenreImages.jsx";

function Genre({ genreName, images }) {
  return (
    <div className="flex h-[250px] w-[270px] flex-col justify-center rounded-lg border-2 border-custom-emerald hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-15">
      <GenreImages images={images} />
      <div className="mt-4 flex h-[30px] w-full justify-center">
        <h2 className="text-2xl font-medium text-custom-white">{genreName}</h2>
      </div>
    </div>
  );
}

export default Genre;
