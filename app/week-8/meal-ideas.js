"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient == null || ingredient == "" ) {
      return;
    }
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-96">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient ? (
        <>
          <p className="text-slate-400 mb-4">
            Here are some meal ideas using{" "}
            <span className="font-semibold text-white">{ingredient}</span>:
          </p>
          {meals.length > 0 ? (
            <ul className="space-y-2">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-slate-800 p-3 rounded-lg flex items-center gap-3"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <span>{meal.strMeal}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">
              No meal ideas found for this ingredient.
            </p>
          )}
        </>
      ) : (
        <p className="text-slate-500">Select an item to see meal ideas.</p>
      )}
    </div>
  );
}
