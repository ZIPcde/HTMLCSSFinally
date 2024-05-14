import React from "react";

function SizeSwitcher({ sizes, onChange }) {
  return (
    <div className="size-switcher">
      {sizes.map((size) => (
        <label key={size} className="size-label">
          <input
            type="checkbox"
            checked={size.checked}
            onChange={() => onChange(size.label)}
          />
          <span className="size-checkbox">{size.label}</span>
        </label>
      ))}
    </div>
  );
}

export default SizeSwitcher;