import React from "react";
import { calcElapsedDays } from "../../helpers/DateCalculator.js";

function SmallNewsCard({ newsData }) {
  const { image, publicationDate, title, description } = newsData;

  return (
    <div className="flex h-[150px] w-full items-center gap-4 border-t border-custom-emerald px-4">
      <div className="relative h-[80%]">
        <div className="absolute inset-0 rounded-lg hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-20"></div>
        <img
          className="inset-0 h-full self-center rounded-lg object-cover"
          src={image}
          alt={`${publicationDate}-news-image`}
        />
      </div>
      <div className="flex h-[85%] w-auto flex-col justify-between font-medium">
        <p className="text-custom-gray-100">
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
