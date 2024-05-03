import React from "react";

function FreeGameCard({ freeGameData }) {
  const { image, title } = freeGameData;

  function calcEndOfPromotionDate() {
    const now = new Date(Date.now());
    const day = now.getDay() + 5;
    const month = now.getMonth();
    const year = now.getFullYear();

    return `${day} / ${month} / ${year}`;
  }

  return (
    <div>
      <div className="3xl:w-[325px] 3xl:h-[435px] rounded-lg border-2 border-transparent transition ease-in-out hover:scale-105 hover:cursor-pointer hover:border-custom-emerald">
        <img
          className="inset-0 h-full w-full self-center rounded-md object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-12 flex flex-col hover:cursor-pointer">
        <a>{title}</a>
        <a className="text-custom-gray-100">{`Free Now - ${calcEndOfPromotionDate()}`}</a>
      </div>
    </div>
  );
}

export default FreeGameCard;
