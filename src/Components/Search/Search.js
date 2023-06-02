import "./Search.css";

const Search = (props) => {
  return (
    <form>
      <input
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        type="text"
        placeholder="Search articles..."
      />
    </form>
  );
};

export default Search;
