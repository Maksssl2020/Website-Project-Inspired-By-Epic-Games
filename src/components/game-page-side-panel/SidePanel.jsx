import React from "react";
import SidePanelButtons from "./SidePanelButtons.jsx";
import GamePrice from "../main-elements/GamePrice.jsx";
import GameInfo from "./GameInfo.jsx";

function SidePanel() {
  const gameData2 = ["Slavic Magic", "Hooded Horse", "04/26/24", "Strategy"];

  return (
    <div className="ml-5 flex w-[320px] flex-col text-custom-white">
      <div className="mb-10 flex justify-center">
        <img
          className="inset-0 w-4/5 self-center object-cover"
          src={
            "https://cdn1.epicgames.com/spt-assets/9618212ee65745f8b61c932898b151dd/manor-lords-logo-bdmmp.png?h=270&quality=medium&resize=1&w=480"
          }
          alt={"Manor Lords"}
        />
      </div>
      <div className="mb-4">
        <GamePrice baseGamePrice={199.99} discount={5} />
      </div>
      <div>
        <SidePanelButtons />
      </div>
      <div className="mt-8">
        <GameInfo gameData={gameData2} />
      </div>
    </div>
  );
}

export default SidePanel;
