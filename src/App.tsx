import "./index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import RecipeDetails from "./pages/RecipeDetails";

import {
  addFavourite as addFavouriteToList,
  removeFavourite as removeFavouriteFromList,
} from "./utils/favourites";

import type { Meal } from "./types/Meal";

function App() {
  const [favourites, setFavourites] = useState<Meal[]>([]);

  const addFavourite = (recipe: Meal) => {
    setFavourites((previousFavourites) =>
      addFavouriteToList(previousFavourites, recipe)
    );
  };

  const removeFavourite = (recipeId: string) => {
    setFavourites((previousFavourites) =>
      removeFavouriteFromList(previousFavourites, recipeId)
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
              element={<Search addFavourite={addFavourite} />}
            />

            <Route
              path="/favourites"
              element={
                <Favourites
                  favourites={favourites}
                  removeFavourite={removeFavourite}
                />
              }
            />

            <Route
              path="/recipe/:id"
              element={<RecipeDetails addFavourite={addFavourite} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
