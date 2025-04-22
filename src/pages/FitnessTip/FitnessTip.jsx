import React, { useState } from "react";

const fitnessTips = [
  {
    content: "Stay hydrated during your workouts to maintain optimal performance.",
    author: "Fitness Expert"
  },
  {
    content: "Incorporate strength training at least twice a week to build muscle mass.",
    author: "Personal Trainer"
  },
  {
    content: "Always warm up before exercising to prevent injuries.",
    author: "Physical Therapist"
  },
  {
    content: "Focus on proper form over heavy weights to maximize results.",
    author: "Gym Instructor"
  },
  {
    content: "Get 7-8 hours of sleep nightly for muscle recovery and growth.",
    author: "Sleep Specialist"
  }
];

const FitnessTip = () => {
  const [tip, setTip] = useState(() => {
    const randomIndex = Math.floor(Math.random() * fitnessTips.length);
    return fitnessTips[randomIndex];
  });

  const fetchTip = () => {
    const randomIndex = Math.floor(Math.random() * fitnessTips.length);
    setTip(fitnessTips[randomIndex]);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg text-center text-white">
      <h2 className="text-3xl font-extrabold mb-6">💪 Daily Fitness Tip</h2>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-xl italic mb-4">“{tip.content}”</p>
        <p className="text-sm text-gray-500">— {tip.author}</p>
      </div>

      <button
        onClick={fetchTip}
        className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-200"
      >
        🔁 Get Another Tip
      </button>
    </div>
  );
};

export default FitnessTip;