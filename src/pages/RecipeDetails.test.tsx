import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import { getRecipeById } from "../services/recipeAPI";
import type { Meal } from "../types/Meal";

jest.mock("../services/recipeAPI");

const mockedGetRecipeById = getRecipeById as jest.MockedFunction<
  typeof getRecipeById
>;

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

test("visiting /recipe/:id displays the recipe details page", async () => {
  mockedGetRecipeById.mockResolvedValue({
    meals: [recipe],
  });

  render(
    <MemoryRouter initialEntries={["/recipe/1"]}>
      <Routes>
        <Route
          path="/recipe/:id"
          element={<RecipeDetails addFavourite={jest.fn()} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByText("Chicken Curry")).toBeInTheDocument();
});
