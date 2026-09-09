import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import type { Meal } from "../types/Meal";
import { searchRecipes } from "../services/recipeAPI";
import LoadingState from "../components/LoadingState";
import EmptyState from "../components/EmptyState";

type SearchProps = {
  addFavourite: (recipe: Meal) => void;
};

const Search = ({ addFavourite }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [recipes, setRecipes] = useState<Meal[]>([]);

  const [searchStatus, setSearchStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return;
    }

    try {
      setSearchStatus("loading");
      setError("");

      const data = await searchRecipes(searchTerm);

      setRecipes(data.meals ?? []);
      setSearchStatus("success");
    } catch {
      setSearchStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="searchContainer">
      <div className="searchResults">
        {searchStatus === "idle" && (
          <EmptyState message="Search for a recipe." />
        )}

        {searchStatus === "loading" && <LoadingState />}

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
