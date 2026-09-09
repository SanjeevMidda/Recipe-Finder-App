import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../types/Meal";
import { getRecipeById } from "../services/recipeAPI";
import LoadingState from "./LoadingState";

type RecipeDetailsProps = {
  addFavourite: (recipe: Meal) => void;
};

const RecipeDetails = ({ addFavourite }: RecipeDetailsProps) => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Meal | null>(null);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setStatus("loading");

        if (!id) {
          setStatus("error");
          return;
        }

        const data = await getRecipeById(id);

        if (!data.meals) {
          setRecipe(null);
          setStatus("success");
          return;
        }

        setRecipe(data.meals[0]);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    fetchRecipe();
  }, [id]);

  const ingredients: string[] = [];

  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Meal];
      const measure = recipe[`strMeasure${i}` as keyof Meal];

      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
  }

  return (
    <div className="recipeDetailsContainer">
      {(status === "idle" || status === "loading") && <LoadingState />}

      {status === "error" && <p>Something went wrong. Please try again.</p>}

      {status === "success" && !recipe && <p>Recipe not found.</p>}

      {status === "success" && recipe && (
        <>
          <h1>{recipe.strMeal}</h1>

          <img src={recipe.strMealThumb} alt={recipe.strMeal} />

          <p>Category: {recipe.strCategory}</p>
          <p>Cuisine: {recipe.strArea}</p>

          <h2>Instructions</h2>
          <p>{recipe.strInstructions}</p>

          <h2>Ingredients</h2>

          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <button onClick={() => addFavourite(recipe)}>
            Add to favourites
          </button>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
