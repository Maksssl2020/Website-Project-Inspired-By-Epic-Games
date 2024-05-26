import React from "react";
import NewsLargeCard from "../../cards/NewsLargeCard.jsx";
import SmallNewsCard from "../../cards/SmallNewsCard.jsx";
import { newsData } from "../../../website-data/NewsData.js";
import ChevronRightIcon from "../../cards/icons/ChevronRightIcon.jsx";
import Pagination from "../../main-elements/pagination/Pagination.jsx";

function NewsSection() {
  let largeNewsCardsData = newsData.slice(0, 2);
  let smallNewsCardsData = newsData.slice(2);

  return (
    <div className="w-[1430px] text-custom-white">
      <h1 className="mb-6 text-4xl">Epic Games News</h1>
      <div className="flex h-[550px] w-full justify-between">
        {largeNewsCardsData.map((data, index) => (
          <NewsLargeCard newsData={data} key={index} />
        ))}
      </div>
      <div className="mt-8 h-auto w-full">
        {smallNewsCardsData.map((data, index) => (
          <SmallNewsCard newsData={data} key={index} />
        ))}
      </div>
      <Pagination pagesMaxNumber={213} />
    </div>
  );
}

export default NewsSection;
