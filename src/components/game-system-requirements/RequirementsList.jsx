import React from "react";

function RequirementsList({ requirementsData, reqType }) {
  const requirementsType = [
    "OS version",
    "CPU",
    "Memory",
    "GPU",
    "DirectX",
    "Storage",
  ];
  const data = [];

  for (let i = 0; i < requirementsType.length; i++) {
    data.push(
      <li
        className={
          requirementsType[i].length === 3
            ? "flex h-[60px] flex-col sm:mt-2 md:mt-4 lg:mt-5"
            : "flex h-[40px] flex-col sm:mt-2 md:mt-4 lg:mt-5"
        }
      >
        <span className="text-custom-gray-100">{requirementsType[i]}</span>
        <span className="text-custom-white">{requirementsData[i]}</span>
      </li>,
    );
  }

  return (
    <div>
      <p className="text-custom-gray-100">{reqType}</p>
      <ul className="mt-2 flex flex-col">{data}</ul>
    </div>
  );
}

export default RequirementsList;
