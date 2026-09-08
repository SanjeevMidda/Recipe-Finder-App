import "./index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import RecipeDetails from "./pages/RecipeDetails";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  strMealAlternate: string | null;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
};

function App() {
  const [favourites, setFavourites] = useState<Meal[]>([]);

  const addFavourite = (recipe: Meal) => {
    setFavourites((previousFavourites) => {
      if (
        previousFavourites.some(
          (favourite) => favourite.idMeal === recipe.idMeal
        )
      ) {
        return previousFavourites;
      }

      return [...previousFavourites, recipe];
    });
  };

  const removeFavourite = (recipeId: string) => {
    setFavourites((previousFavourites) =>
      previousFavourites.filter((favourite) => favourite.idMeal !== recipeId)
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainContainer">
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <Search favourites={favourites} addFavourite={addFavourite} />
              }
            />
            <Route
              path="/favourites"
              element={<Favourites removeFavourite={removeFavourite} />}
            />
            <Route
              path="/recipe/:id"
              element={
                <RecipeDetails
                  favourites={favourites}
                  addFavourite={addFavourite}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
