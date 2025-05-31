// components/layout/Header.tsx
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        Luxury Stay
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {["Rooms", "Mansion", "Countryside", "City View"].map((item) => (
          <button
            key={item}
            className="text-gray-600 hover:text-gray-900 font-medium"
            onClick={() => console.log(`${item} clicked`)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <button
          className="text-gray-600 hover:text-gray-900 font-medium"
          onClick={() => alert("Sign In Clicked")}
        >
          Sign In
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => alert("Sign Up Clicked")}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;

