// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
