import foodImageOne from "../imgs/foodImageOne.jpg";
import foodImageTwo from "../imgs/foodImageTwo.jpg";
import foodImageThree from "../imgs/foodImageThree.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>DISHY</h1>
      <h3>Find Your Next Favourite Recipe</h3>
      <p>
        Discover delicious recipes based on what you’re craving or the
        ingredients you already have. Search, explore, and find your next meal
        with ease. Click 'Search' from the menu at the top to search for your
        dream meal.
      </p>

      <div className="imageContainer">
        <img src={foodImageOne} alt="" />
        <img src={foodImageTwo} alt="" />
        <img src={foodImageThree} alt="" />
      </div>
    </div>
  );
};

export default Home;
