import type { Meal } from "../types/Meal";

type FavouriteProps = {
  favourites: Meal[];
  removeFavourite: (recipeId: string) => void;
};
const Favourites = ({ favourites, removeFavourite }: FavouriteProps) => {
  return <div></div>;
};

export default Favourites;
