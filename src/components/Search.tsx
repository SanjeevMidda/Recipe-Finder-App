const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchResults"></div>
      <div className="findContainer">
        <input type="text" id="searchInput" />
        <button>search</button>
      </div>
    </div>
  );
};

export default Search;
