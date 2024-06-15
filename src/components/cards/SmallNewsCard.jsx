import React from "react";
import { calcElapsedDays } from "../../helpers/DateCalculator.js";

function SmallNewsCard({ newsData }) {
  const { image, publicationDate, title, description } = newsData;

  return (
    <div className="grid h-[150px] w-full grid-cols-[auto_1fr] items-center gap-4 border-t border-custom-emerald px-4">
      <div className="relative h-[115px] w-[200px] max-sm:h-[100px] max-sm:w-[175px]">
        <div className="absolute inset-0 rounded-lg hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-20"></div>
        <img
          className=" h-full rounded-lg object-cover"
          src={image}
          alt={`${publicationDate}-news-image`}
        />
      </div>
      <div className="flex h-[85%] flex-col justify-between text-[8px] font-medium 2xs:text-[10px] sm:text-xs lg:text-sm">
        <p className="text-custom-gray-100 sm:text-[10px] lg:text-xs">
          {calcElapsedDays(publicationDate)}
        </p>
        <p className="font-bold">{title}</p>
        <p className="text-custom-gray-100">{description}</p>
        <button className="mr-auto underline">Read more</button>
      </div>
    </div>
  );
}

export default SmallNewsCard;
