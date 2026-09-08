import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

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

const Search = () => {
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
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      setRecipes(data.meals ?? []);

      setSearchStatus("success");
    } catch {
      setSearchStatus("error");

      setError("Something went wrong. Please try again.");
    }
  };

  const handleSearch = () => {
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
                recipeId={recipe.idMeal}
                recipeImage={recipe.strMealThumb}
                recipeName={recipe.strMeal}
                category={recipe.strCategory}
                cuisine={recipe.strArea}
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
