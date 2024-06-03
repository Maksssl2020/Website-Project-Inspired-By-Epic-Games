import React from "react";
import RequirementsList from "./RequirementsList.jsx";

function GameRequirementsInfo() {
  const testMinReqData = [
    "Windows® 10 (64-bit)",
    "Intel® Core™ i5-4670 (quad-core) / AMD® FX-Series™ FX-4350 (quad-core)",
    "8 GB RAM",
    "NVIDIA® GeForce® GTX 1050 (2 GB) / AMD® Radeon™ RX-460 (4 GB) / Intel® Arc™ A380 (6 GB)",
    "DirectX 12",
    "15 GB",
  ];
  const texsRecReqData = [
    "Windows® 10 (64-bit)",
    "Intel® Core™ i5-7600 (quad-core) / AMD® Ryzen™ 3 2200G (quad-core)",
    "12 GB RAM",
    "NVIDIA® GeForce® GTX 1060 (6 GB) / AMD® Radeon™ RX 580 (8 GB) / Intel® Arc™ A580 (8 GB)",
    "DirectX 12",
    "15 GB",
  ];

  return (
    <div className="flex flex-col rounded-lg border-2 border-custom-emerald p-4 xl:mt-8">
      <div className="self-center">
        <h2 className="w-full text-custom-white sm:text-lg xl:text-2xl">
          System Requirements
        </h2>
      </div>
      <div className="grid grid-cols-2 font-medium max-md:mx-2 max-md:mt-2 max-md:text-[10px] md:text-xs lg:mx-4 lg:mt-10 lg:text-sm">
        <RequirementsList requirementsData={testMinReqData} reqType="Minimum" />
        <RequirementsList
          requirementsData={texsRecReqData}
          reqType="Recommended"
        />
      </div>
    </div>
  );
}

export default GameRequirementsInfo;
