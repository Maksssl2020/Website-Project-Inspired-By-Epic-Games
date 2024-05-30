import React from "react";
import { calcElapsedDays } from "../../helpers/DateCalculator.js";

function NewsLargeCard({ newsData }) {
  const { image, publicationDate, title, description } = newsData;

  return (
    <div className="hover flex h-full flex-col rounded-lg border-2 border-transparent transition-all ease-in-out hover:-translate-y-2 hover:border-custom-emerald md:w-[350px] lg:w-[450px] xl:w-[585px] 2xl:w-[700px]">
      <div className="h-[65%]">
        <img
          className="inset-0 h-full w-full self-center rounded-lg object-cover hover:cursor-pointer"
          src={image}
          alt={`${publicationDate}-news-image`}
        />
      </div>
      <div className="flex h-[35%] flex-col px-2 py-4 text-[8px] 3xs:text-[10px] sm:text-xs lg:text-sm">
        <p className="text-custom-gray-100 sm:text-[10px] lg:text-xs">
          {calcElapsedDays(publicationDate)}
        </p>
        <div className="mt-2 flex h-full flex-col space-y-2">
          <h1 className="font-bold">{title}</h1>
          <p className="text-custom-gray-100">{description}</p>
        </div>
        <button className="mr-auto mt-auto underline">Read more</button>
      </div>
    </div>
  );
}

export default NewsLargeCard;
