const SearchBar = ({ useTextSearch }) => {
  const [textSearched, setTextSearched] = useTextSearch;
  return (
    <div className="flex max-w-xs items-center rounded-md bg-paper-light p-4 shadow-sm transition-bg dark:bg-night-light">
      <span className="mx-4 text-pencil dark:text-moonlight">
        <i className="bi bi-search"></i>
      </span>
      <input
        className="w-full bg-paper-light text-xl text-ink placeholder-pencil outline-none transition-bg dark:bg-night-light dark:text-light dark:placeholder-moonlight"
        value={textSearched}
        onChange={(e) => setTextSearched(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
