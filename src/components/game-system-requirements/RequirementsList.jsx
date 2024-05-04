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
      <li>
        <p className="text-custom-gray-100">{requirementsType[i]}</p>
        <p className="text-custom-white">{requirementsData[i]}</p>
      </li>,
    );
  }

  return (
    <div>
      <p className="text-custom-gray-100">{reqType}</p>
      <ul className="mt-4 flex flex-col gap-6">{data}</ul>
    </div>
  );
}

export default RequirementsList;
