import React from "react";

function GenreImages({ images }) {
  return (
    <div className="flex h-[145px] justify-center">
      <div className="bg-gradient absolute z-10 h-[145px] w-[215px] rounded-lg bg-gradient-to-r from-[#0B0B0B] opacity-20"></div>
      <div className="bg-gradient absolute z-10 h-[145px] w-[215px] rounded-lg bg-gradient-to-l from-[#0B0B0B] opacity-20"></div>
      <img
        className="z-20 h-full self-center rounded-lg"
        src={images[0]}
        alt="Main Image"
      />
      <div className="absolute flex h-[145px] w-[215px]">
        <img className="rounded-lg" src={images[1]} alt="Side Image Left" />
        <img
          className="ml-[22px] rounded-lg"
          src={images[2]}
          alt="Side Image Right"
        />
      </div>
    </div>
  );
}

export default GenreImages;
