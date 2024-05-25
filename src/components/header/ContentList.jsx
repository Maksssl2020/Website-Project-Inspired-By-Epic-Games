import React from "react";

function ContentList({ components, additionalStyling = undefined }) {
  let primaryStyling = "flex items-center gap-4 text-custom-gray-100 ";

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((styling) => (primaryStyling += ` ${styling}`));
  }

  return (
    <ul className={primaryStyling}>
      {components.map((component, key) => (
        <li className={component.length > 1 ? component[1] : null} key={key}>
          {component.length > 0 ? component[0] : component}
        </li>
      ))}
    </ul>
  );
}

export default ContentList;
