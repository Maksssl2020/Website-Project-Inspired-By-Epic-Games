import React from "react";

function GenreImages({ images }) {
  return (
    <div className="3xs:h-[95px] flex justify-center sm:h-[115px] md:h-[145px]">
      <div className="bg-gradient 3xs:w-[125px] 3xs:h-[95px] absolute z-10 rounded-lg bg-gradient-to-r from-[#0B0B0B] opacity-20 sm:h-[115px] sm:w-[185px] md:h-[145px] md:w-[215px]"></div>
      <div className="bg-gradient 3xs:w-[125px] 3xs:h-[95px] absolute z-10 rounded-lg bg-gradient-to-l from-[#0B0B0B] opacity-20 sm:h-[115px] sm:w-[185px] md:h-[145px] md:w-[215px]"></div>
      <img
        className="z-20 h-full self-center rounded-lg"
        src={images[0]}
        alt="Main Image"
      />
      <div className="3xs:w-[125px] 3xs:h-[95px] absolute flex sm:h-[115px] sm:w-[185px] md:h-[145px] md:w-[215px]">
        <img className="rounded-lg" src={images[1]} alt="Side Image Left" />
        <img
          className="3xs:ml-[2px] rounded-lg sm:ml-[24px] md:ml-[22px]"
          src={images[2]}
          alt="Side Image Right"
        />
      </div>
    </div>
  );
}

export default GenreImages;
