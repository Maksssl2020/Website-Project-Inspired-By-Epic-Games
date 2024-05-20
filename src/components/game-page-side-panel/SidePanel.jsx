import React from "react";
import SidePanelButtons from "./SidePanelButtons.jsx";
import GamePrice from "../main-elements/GamePrice.jsx";
import GameInfo from "./GameInfo.jsx";

function SidePanel({ logo, title, discount, price, additionalInfo }) {
  const gameData2 = ["Slavic Magic", "Hooded Horse", "04/26/24", "Strategy"];

  return (
    <div className="flex flex-col text-custom-white max-sm:w-[400px] max-sm:text-sm sm:w-[500px] sm:text-lg md:ml-5 md:w-[225px] md:text-sm lg:w-[275px] xl:w-[320px]">
      <div className="mb-10 flex justify-center">
        <img
          className="inset-0 self-center object-cover max-md:hidden sm:w-3/5 xl:w-3/4 2xl:w-4/5"
          src={logo}
          alt={title}
        />
      </div>
      <div className="mb-4 self-center">
        <GamePrice baseGamePrice={price} discount={discount} />
      </div>
      <div>
        <SidePanelButtons />
      </div>
      <div className="mt-8">
        <GameInfo gameData={additionalInfo} />
      </div>
    </div>
  );
}

export default SidePanel;
