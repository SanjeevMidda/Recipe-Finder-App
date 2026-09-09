import { addFavourite, removeFavourite } from "./favourites";
import type { Meal } from "../types/Meal";

const recipe: Meal = {
  idMeal: "1",
  strMeal: "Chicken Curry",
  strCategory: "Chicken",
  strArea: "Indian",
  strInstructions: "Cook the chicken.",
  strMealThumb: "image.jpg",
  strTags: null,
  strYoutube: "",
  strSource: "",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
  strMealAlternate: null,

  strIngredient1: "Chicken",
  strIngredient2: "Curry Powder",
  strIngredient3: "",
  strIngredient4: "",
  strIngredient5: "",
  strIngredient6: "",
  strIngredient7: "",
  strIngredient8: "",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",

  strMeasure1: "500g",
  strMeasure2: "2 tbsp",
  strMeasure3: "",
  strMeasure4: "",
  strMeasure5: "",
  strMeasure6: "",
  strMeasure7: "",
  strMeasure8: "",
  strMeasure9: "",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
};

test("adds a recipe to favourites", () => {
  expect(addFavourite([], recipe)).toEqual([recipe]);
});

test("prevents duplicate recipes", () => {
  expect(addFavourite([recipe], recipe)).toEqual([recipe]);
});

test("removes a recipe from favourites", () => {
  expect(removeFavourite([recipe], "1")).toEqual([]);
});

test("does nothing when removing a recipe that does not exist", () => {
  expect(removeFavourite([recipe], "999")).toEqual([recipe]);
});
