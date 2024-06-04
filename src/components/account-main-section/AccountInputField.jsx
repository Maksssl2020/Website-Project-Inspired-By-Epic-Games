import React, { useEffect, useState } from "react";

function AccountInputField({
  dataInfo = "",
  initialValue = "",
  additionalStyling = "",
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
      className={`relative h-[60px] rounded-lg border-2 border-custom-emerald bg-transparent focus-within:border-custom-white hover:border-custom-white ${additionalStyling}`}
    >
      <input
        className={`w-full rounded bg-transparent px-4 py-2 text-sm outline-none transition-all duration-300 ease-in-out
          ${isActive ? "pt-6" : "mt-2"}`}
        type="text"
        value={value}
        onChange={handleActivation}
        placeholder={initialValue}
      />
      <label
        className={`absolute left-0 top-0 px-4 py-1 text-custom-gray-100 transition-all duration-300 ease-in-out ${isActive ? "mt-1 -translate-y-1 text-xs" : " mt-3 text-sm"}`}
      >
        {dataInfo}
      </label>
    </div>
  );
}

export default AccountInputField;
