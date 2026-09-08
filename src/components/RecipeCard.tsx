import { Link } from "react-router-dom";
import type { Meal } from "../types/Meal";

type RecipeCardProps = {
  recipe: Meal;
  addFavourite?: (recipe: Meal) => void;
  removeFavourite?: (recipeId: string) => void;
};

const RecipeCard = ({
  recipe,
  addFavourite,
  removeFavourite,
}: RecipeCardProps) => {
  return (
    <div className="recipeCardContainer">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2>{recipe.strMeal}</h2>
        <h4>{recipe.strCategory}</h4>
        <h4>{recipe.strArea}</h4>
      </Link>

      {addFavourite && (
        <button onClick={() => addFavourite(recipe)}>Add to favourites</button>
      )}

      {removeFavourite && (
        <button onClick={() => removeFavourite(recipe.idMeal)}>
          Remove from favourites
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
