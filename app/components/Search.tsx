"use client";

import React from 'react';

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
  
  return (
    <div className="search flex gap-3 rounded-lg px-4 py-4 w-1/3 absolute left-12 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search for a country...."
        className="outline-none font-semibold"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
