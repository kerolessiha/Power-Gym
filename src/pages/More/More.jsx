import React from 'react';
import { Link } from 'react-router-dom';

export default function More() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-[10%]">
      <Link to="/HealthyMeals" className="relative flex items-center justify-center flex-col h-36 w-96 rounded-lg text-white cursor-pointer transition-transform duration-400 bg-pink-600 hover:scale-110 hover:blur-sm">
        <p className="text-lg font-bold">Meals</p>
        <p className="text-sm">Explore Nutritious Meals</p>
      </Link>
      <Link to="/CalorieCalculator" className="relative flex items-center justify-center flex-col h-36 w-96 rounded-lg text-white cursor-pointer transition-transform duration-400 bg-blue-600 hover:scale-110 hover:blur-sm">
        <p className="text-lg font-bold">Calorie</p>
        <p className="text-sm">Calorie / Nutrition Calculator</p>
      </Link>
      <Link to="/FitnessTip" className="relative flex items-center justify-center flex-col h-36 w-96 rounded-lg text-white cursor-pointer transition-transform duration-400 bg-green-600 hover:scale-110 hover:blur-sm">
        <p className="text-lg font-bold">Tips</p>
        <p className="text-sm">Daily Fitness Tip</p>
      </Link>
    </div>
  );
}

  
