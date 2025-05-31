// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border 
        ${isActive ? "bg-black text-white" : "bg-white text-black"} 
        hover:bg-gray-200 transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
