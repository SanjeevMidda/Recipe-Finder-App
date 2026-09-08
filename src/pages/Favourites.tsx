import RecipeCard from "../components/RecipeCard";
import type { Meal } from "../types/Meal";

type FavouritesProps = {
  favourites: Meal[];
  removeFavourite: (recipeId: string) => void;
};

const Favourites = ({ favourites, removeFavourite }: FavouritesProps) => {
  return (
    <div className="favouritesContainer">
      <h1>Favourites</h1>

      {favourites.length === 0 && (
        <p>You don't have any favourite recipes yet.</p>
      )}

      {favourites.length > 0 && (
        <div>
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              removeFavourite={removeFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
