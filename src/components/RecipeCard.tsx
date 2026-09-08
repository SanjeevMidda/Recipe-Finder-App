import { Link } from "react-router-dom";
import type { Meal } from "../types/Meal";

type RecipeCardProps = {
  recipe: Meal;
  addFavourite: (recipe: Meal) => void;
};

const RecipeCard = ({ recipe, addFavourite }: RecipeCardProps) => {
  return (
    <div className="recipeCardContainer">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2>{recipe.strMeal}</h2>
        <h4>{recipe.strCategory}</h4>
        <h4>{recipe.strArea}</h4>
      </Link>

      <button onClick={() => addFavourite(recipe)}>Add to favourites</button>
    </div>
  );
};

export default RecipeCard;
