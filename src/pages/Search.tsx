import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import type { Meal } from "../types/Meal";

type SearchProps = {
  addFavourite: (recipe: Meal) => void;
};

type MealResponse = {
  meals: Meal[] | null;
};

const Search = ({ addFavourite }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [recipes, setRecipes] = useState<Meal[]>([]);

  const [searchStatus, setSearchStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const searchRecipes = async (searchTerm: string) => {
    try {
      setSearchStatus("loading");
      setError("");

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          searchTerm
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data: MealResponse = await response.json();

      setRecipes(data.meals ?? []);
      setSearchStatus("success");
    } catch {
      setSearchStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      return;
    }

    searchRecipes(searchTerm);
  };

  return (
    <div className="searchContainer">
      <div className="searchResults">
        {searchStatus === "idle" && <p>Search for a recipe.</p>}

        {searchStatus === "loading" && <p>Loading...</p>}

        {searchStatus === "error" && <p>{error}</p>}

        {searchStatus === "success" && recipes.length === 0 && (
          <p>No recipes found. Try another search.</p>
        )}

        {searchStatus === "success" && recipes.length > 0 && (
          <div>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                addFavourite={addFavourite}
              />
            ))}
          </div>
        )}
      </div>

      <div className="findContainer">
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
