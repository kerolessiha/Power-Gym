import React, { useState } from 'react';
import axios from 'axios';

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activityLevel: '1.2', // Default Sedentary
  });
  const [calories, setCalories] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, weight, height, gender, activityLevel } = formData;

    // Calculate BMR based on gender
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    const dailyCalories = bmr * parseFloat(activityLevel);
    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg mt-10 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Calorie & Nutrition Calculator</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition duration-200"
            placeholder="Your age"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition duration-200"
            placeholder="Your weight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition duration-200"
            placeholder="Your height"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full mt-1 p-3 border  bg-blue-900 border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition duration-200"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Activity Level</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            className="w-full mt-1 p-3 border bg-blue-900 border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition duration-200"
          >
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Super active</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200 transform hover:scale-105"
        >        Calculate Daily Calories
        </button>
      </form>

      {calories && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Your Daily Calorie Needs:</p>
          <p className="text-2xl font-bold">{calories} kcal</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;