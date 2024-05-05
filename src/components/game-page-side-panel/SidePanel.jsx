import React from "react";
import SidePanelButtons from "./SidePanelButtons.jsx";
import GamePrice from "../main-elements/GamePrice.jsx";
import GameInfo from "./GameInfo.jsx";

function SidePanel({ logo, title, discount, price, additionalInfo }) {
  const gameData2 = ["Slavic Magic", "Hooded Horse", "04/26/24", "Strategy"];

  return (
    <div className="ml-5 flex w-[320px] flex-col text-custom-white">
      <div className="mb-10 flex justify-center">
        <img
          className="inset-0 w-4/5 self-center object-cover"
          src={logo}
          alt={title}
        />
      </div>
      <div className="mb-4">
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
