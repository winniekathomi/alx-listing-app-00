// components/FilterBar.tsx
import React, { useState } from "react";
import Pill from "./Pill";

const filters = [
  "Top Villa",
  "Pet Friendly",
  "Self Checkin",
  "Mountain View",
  "Free WiFi",
  "Pool",
];

const FilterBar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-3 flex-wrap my-6">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterBar;
