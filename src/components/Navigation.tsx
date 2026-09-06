import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <div className="logo"></div>

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

      <div className="customerGreeting">
        <p>Welcome</p>
        <p>John Appleseed</p>
      </div>
    </div>
  );
};

export default Navigation;
