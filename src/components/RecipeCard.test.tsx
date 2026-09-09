import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import type { Meal } from "../types/Meal";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

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

test("recipe card links to the correct recipe details page", () => {
  render(<RecipeCard recipe={recipe} />);

  const recipeLink = screen.getByRole("link", {
    name: /Chicken Curry/i,
  });

  expect(recipeLink).toHaveAttribute("href", "/recipe/1");
});
