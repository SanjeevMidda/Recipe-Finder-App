import type { MealResponse } from "../types/MealResponse";

export const searchRecipes = async (searchTerm: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
      searchTerm
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: MealResponse = await response.json();

  return data;
};
