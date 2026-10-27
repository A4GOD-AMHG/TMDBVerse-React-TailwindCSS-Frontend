import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className="search">
            <img src="/search.svg" alt="" className="absolute left-5 h-5 w-5" />
            <input
                type="search"
                aria-label="Search movies"
                placeholder="Try 'The Dark Knight' or 'Forrest Gump'"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
                <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearchValue("")}
                    className="absolute right-4 rounded-full p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                    <img className="h-5 w-5" src="/cancel.svg" alt="" />
                </button>
            )}
        </div>
    );
};

export default Search;
