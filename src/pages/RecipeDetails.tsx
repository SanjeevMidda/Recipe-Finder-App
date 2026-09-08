import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Meal | null>(null);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setStatus("loading");

        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }

        const data = await response.json();

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
      {(status === "idle" || status === "loading") && <p>Loading...</p>}

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
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
