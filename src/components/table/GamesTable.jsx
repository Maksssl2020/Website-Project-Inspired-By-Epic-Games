import React from "react";
import GamesTableButtons from "./GamesTableButtons.jsx";
import { gamesTableData } from "../../website-data/GamesTableData.js";

function GamesTable() {
  return (
    <div className="xl:[1140px] 2xl:w-[1460px]">
      <div className="grid h-full w-full grid-cols-3">
        <div className="border-r-[1px] border-custom-emerald pr-2">
          <GamesTableButtons
            text={"Top Sellers"}
            gamesData={gamesTableData.slice(0, 5)}
          />
        </div>
        <div className="mx-2">
          <GamesTableButtons
            text={"Most Played"}
            gamesData={gamesTableData.slice(5, 10)}
          />
        </div>
        <div className="border-l-[1px] border-custom-emerald pl-2">
          <GamesTableButtons
            text={"Popular New Games"}
            gamesData={gamesTableData.slice(10, 15)}
          />
        </div>
      </div>
    </div>
  );
}

export default GamesTable;
