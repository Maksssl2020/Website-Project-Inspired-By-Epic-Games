import React from "react";
import GamesTableButtons from "./GamesTableButtons.jsx";
import { gamesTableData } from "../../website-data/GamesTableData.js";

function GamesTable() {
  return (
    <div className="w-full">
      <div className="grid h-full w-full grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="border-r-[1px] border-custom-emerald pr-2 max-sm:border-0">
          <GamesTableButtons
            text={"Top Sellers"}
            gamesData={gamesTableData.slice(0, 5)}
          />
        </div>
        <div className="mx-2 max-sm:hidden">
          <GamesTableButtons
            text={"Most Played"}
            gamesData={gamesTableData.slice(5, 10)}
          />
        </div>
        <div className="border-l-[1px] border-custom-emerald pl-2 max-md:hidden">
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
