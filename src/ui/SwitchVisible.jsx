"use client";
import React, { useState } from "react";

function SwitchVisible({ switchLabel, initialValue, onToggle }) {
  const [isOn, setIsOn] = useState(initialValue || false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle && onToggle(!isOn); // Notificar al componente padre
  };

  return (
    <div className="flex items-center gap-1">
      <span className="text-sm text-left ml-2 mb-1 text-gray-600">
        {switchLabel || "Visible en Home: "}
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch-2"
          type="checkbox"
          className="peer sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
      </label>
    </div>
  );
}

export default SwitchVisible;