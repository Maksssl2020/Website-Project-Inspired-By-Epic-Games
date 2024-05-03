import React from "react";

function Links({ linksData }) {
  return (
    <ul>
      {linksData.map((data, index) => (
        <li
          key={index}
          className=" hover:cursor-pointer hover:text-custom-emerald"
        >
          {data}
        </li>
      ))}
    </ul>
  );
}

export default Links;
