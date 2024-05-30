import React from "react";
import NewsLargeCard from "../../cards/NewsLargeCard.jsx";
import SmallNewsCard from "../../cards/SmallNewsCard.jsx";
import { newsData } from "../../../website-data/NewsData.js";
import Pagination from "../../main-elements/pagination/Pagination.jsx";

function NewsSection() {
  let largeNewsCardsData = newsData.slice(0, 2);
  let smallNewsCardsData = newsData.slice(2);

  return (
    <div className="w-[90%] text-custom-white 3xs:w-[450px] xs:w-[510px] sm:w-[600px] md:w-[725px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1430px]">
      <h1 className="mb-6 text-4xl">Epic Games News</h1>
      <div className="flex w-full justify-between max-md:flex-col max-md:space-y-4 md:h-[550px]">
        {largeNewsCardsData.map((data, index) => (
          <NewsLargeCard newsData={data} key={index} />
        ))}
      </div>
      <div>
        {smallNewsCardsData.map((data, index) => (
          <SmallNewsCard newsData={data} key={index} />
        ))}
      </div>
      <Pagination pagesMaxNumber={213} />
    </div>
  );
}

export default NewsSection;
