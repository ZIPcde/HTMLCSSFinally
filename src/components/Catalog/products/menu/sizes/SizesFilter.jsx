import React from "react";

function SizesFilter({ selectedSizes, handleSizeChange }) {
  return (
    <div className="sizes">
      {Object.keys(selectedSizes).map((size, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedSizes[size]}
            onChange={() => handleSizeChange(size)}
          />
          {size}
        </label>
      ))}
    </div>
  );
}

export default SizesFilter;