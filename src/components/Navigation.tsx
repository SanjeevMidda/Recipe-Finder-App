import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo"></div>

      <nav>
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/search">
          Search
        </NavLink>
        <NavLink className="nav-link" to="/favourites">
          Favourites
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
