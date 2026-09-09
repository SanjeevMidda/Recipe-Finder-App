import type { Meal } from "../types/Meal";

export const addFavourite = (favourites: Meal[], recipe: Meal): Meal[] => {
  if (favourites.some((favourite) => favourite.idMeal === recipe.idMeal)) {
    return favourites;
  }

  return [...favourites, recipe];
};

export const removeFavourite = (
  favourites: Meal[],
  recipeId: string
): Meal[] => {
  return favourites.filter((favourite) => favourite.idMeal !== recipeId);
};
