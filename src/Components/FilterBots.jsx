// Components/FilterBar.jsx
import React from "react";

const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ filters, onChange }) {
  const handleCheckboxChange = (botClass) => {
    if (filters.includes(botClass)) {
      onChange(filters.filter((cls) => cls !== botClass));
    } else {
      onChange([...filters, botClass]);
    }
  };

  return (
    <div className="filter-bar">
      <strong>Filter by Class:</strong>
      {botClasses.map((botClass) => (
        <label key={botClass} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filters.includes(botClass)}
            onChange={() => handleCheckboxChange(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;
