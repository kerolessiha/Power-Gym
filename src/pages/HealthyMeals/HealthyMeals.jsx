import React, { useState, useEffect } from "react";
import axios from "axios";

const HealthyMeals = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Vegetarian");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setCategories(res.data.meals))
      .catch(() => setError("Failed to load categories"));
  }, []);

  // Fetch meals for selected category
  useEffect(() => {
    if (!selectedCategory) return;
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then((res) => {
        setMeals(res.data.meals || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load meals");
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto p-6  min-h-screen">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">
        Explore Nutritious Meals
      </h2>

      {/* Dropdown */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border-2 border-white text-indigo-400 px-5 py-2 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {categories.map((cat) => (
            <option key={cat.strCategory} value={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {meal.strMeal}
                </h3>
                <a
                  href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
                >
                  🍽 View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HealthyMeals;
