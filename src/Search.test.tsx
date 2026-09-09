import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./pages/Search";
import { searchRecipes } from "./services/recipeAPI";
import type { Meal } from "./types/Meal";

jest.mock("react-router-dom", () => ({
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("./services/recipeAPI");

const mockedSearchRecipes = searchRecipes as jest.MockedFunction<
  typeof searchRecipes
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

test("renders search results", async () => {
  mockedSearchRecipes.mockResolvedValue({
    meals: [recipe],
  });

  render(<Search addFavourite={jest.fn()} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: "Search" });

  fireEvent.change(input, {
    target: { value: "chicken" },
  });

  fireEvent.click(button);

  expect(await screen.findByText("Chicken Curry")).toBeInTheDocument();
});

test("renders empty state when no recipes are found", async () => {
  mockedSearchRecipes.mockResolvedValue({
    meals: null,
  });

  render(<Search addFavourite={jest.fn()} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: "Search" });

  fireEvent.change(input, {
    target: { value: "somethingthatdoesnotexist" },
  });

  fireEvent.click(button);

  expect(
    await screen.findByText("No recipes found. Try another search.")
  ).toBeInTheDocument();
});

test("adds a recipe to favourites", async () => {
  mockedSearchRecipes.mockResolvedValue({
    meals: [recipe],
  });

  const addFavourite = jest.fn();

  render(<Search addFavourite={addFavourite} />);

  const input = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button", { name: "Search" });

  fireEvent.change(input, {
    target: { value: "chicken" },
  });

  fireEvent.click(searchButton);

  const favouriteButton = await screen.findByRole("button", {
    name: "Add to favourites",
  });

  fireEvent.click(favouriteButton);

  expect(addFavourite).toHaveBeenCalledWith(recipe);
});
