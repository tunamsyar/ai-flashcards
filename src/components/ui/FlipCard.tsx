"use client";

import React, { useState } from "react";

type FlashCard = {
  front: string;
  back: string;
};

const FlipCard: React.FC<{ flashCard: FlashCard }> = ({ flashCard }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-80 h-48 perspective" onClick={() => setFlipped(!flipped)}>
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-blue-500 rounded-2xl shadow-md flex items-center justify-center text-center p-4 backface-hidden">
          <p className="text-lg font-semibold">{flashCard.front}</p>
        </div>
        <div className="absolute w-full h-full bg-black text-white rounded-2xl shadow-md flex items-center justify-center text-center p-4 rotate-y-180 backface-hidden">
          <p className="text-lg font-medium">{flashCard.back}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
