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
    <div className="mt-8 flex h-[700px] w-[1050px] flex-col rounded-lg border-2 border-custom-emerald p-4">
      <div className="self-center">
        <h2 className="w-full text-2xl text-custom-white">
          System Requirements
        </h2>
      </div>
      <div className="m-4 grid grid-cols-2 text-sm">
        <div>
          <RequirementsList
            requirementsData={testMinReqData}
            reqType="Minimum"
          />
        </div>
        <div>
          <RequirementsList
            requirementsData={texsRecReqData}
            reqType="Recommended"
          />
        </div>
      </div>
    </div>
  );
}

export default GameRequirementsInfo;
