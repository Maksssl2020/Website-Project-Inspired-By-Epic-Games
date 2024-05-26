import React from "react";
import { calcElapsedDays } from "../../helpers/DateCalculator.js";

function NewsLargeCard({ newsData }) {
  const { image, publicationDate, title, description } = newsData;

  return (
    <div className="hover h-full w-[700px] rounded-lg border-2 border-transparent transition-all ease-in-out hover:-translate-y-2 hover:border-custom-emerald">
      <div className="h-[65%]">
        <img
          className="inset-0 h-full w-full self-center rounded-lg object-cover hover:cursor-pointer"
          src={image}
          alt={`${publicationDate}-news-image`}
        />
      </div>
      <div className="h-auto space-y-2 px-2 py-4">
        <p className="text-sm text-custom-gray-100">
          {calcElapsedDays(publicationDate)}
        </p>
        <h1 className="font-bold">{title}</h1>
        <p className="text-custom-gray-100">{description}</p>
        <button className="underline">Read more</button>
      </div>
    </div>
  );
}

export default NewsLargeCard;
