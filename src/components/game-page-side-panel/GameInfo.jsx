import React from "react";

function GameInfo({ gameData }) {
  const totalGameInfo = [
    {
      infoType: "Developer",
      receivedData: gameData[0],
    },
    {
      infoType: "Publisher",
      receivedData: gameData[1],
    },
    {
      infoType: "Release Date",
      receivedData: gameData[2],
    },
    {
      infoType: "Category",
      receivedData: gameData[3],
    },
  ];

  return (
    <div className="grid w-full grid-rows-4 gap-4">
      {totalGameInfo.map((data, index) => (
        <div key={index} className="flex border-b-[1px] border-custom-emerald">
          <p className="text-custom-gray-100">{data.infoType}</p>
          <p className="ml-auto">{data.receivedData}</p>
        </div>
      ))}
    </div>
  );
}

export default GameInfo;
