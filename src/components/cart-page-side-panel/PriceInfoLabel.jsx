import React from "react";

function PriceInfoLabel({ valueTitle, value }) {
  return (
    <div className="flex justify-between">
      <p>{valueTitle}</p>
      <p>{value}</p>
    </div>
  );
}

export default PriceInfoLabel;
