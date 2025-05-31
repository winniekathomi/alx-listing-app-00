// components/FilterPill.tsx
import React from "react";
import { FilterPillProps } from "@/interfaces";

const FilterPill: React.FC<FilterPillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition-colors duration-300
        ${
          active
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};

export default FilterPill;
