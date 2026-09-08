import { Link } from "react-router-dom";

type RecipeCardProps = {
  recipeId: string;
  recipeImage: string;
  recipeName: string;
  category: string;
  cuisine: string;
};

const RecipeCard = ({
  recipeId,
  recipeImage,
  recipeName,
  category,
  cuisine,
}: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipeId}`} className="recipeCardContainer">
      <img src={recipeImage} alt={recipeName} />
      <h2>{recipeName}</h2>
      <h4>{category}</h4>
      <h4>{cuisine}</h4>
    </Link>
  );
};

export default RecipeCard;
