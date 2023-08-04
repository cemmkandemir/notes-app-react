const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
