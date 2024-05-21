import React, { useEffect, useState } from "react";

function AccountInputField({
  widthValue = "300",
  dataInfo = "",
  initialValue = "",
}) {
  const [value, setValue] = useState(initialValue);
  const [isActive, setIsActive] = useState(initialValue !== "");

  useEffect(() => {
    setIsActive(value !== "");
  }, [value]);

  function handleActivation(event) {
    setValue(event.target.value);
  }

  return (
    <div
      className={
        "relative h-[60px] rounded-lg border-2 border-custom-emerald bg-transparent focus-within:border-custom-white hover:border-custom-white"
      }
      style={{ width: `${widthValue}px` }}
    >
      <input
        className={[
          "rounded bg-transparent px-4 py-2 text-sm outline-none transition-all duration-200 ease-in-out",
          isActive ? "pt-6" : "mt-2",
        ].join(" ")}
        id="dataInput"
        type="text"
        value={value}
        onChange={handleActivation}
        placeholder={initialValue}
      />
      <label
        className={[
          "absolute left-0 top-0 px-4 py-1 text-custom-gray-100 transition-all duration-200 ease-in-out",
          isActive ? "mt-1 -translate-y-1 transform text-xs" : " mt-3 text-sm",
        ].join(" ")}
        htmlFor="dataInput"
      >
        {dataInfo}
      </label>
    </div>
  );
}

export default AccountInputField;
