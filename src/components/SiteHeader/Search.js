import React from "react"

import SHstyle from "./style.module.scss"

const Search = () => (
  <form action="" className="form d-flex">
    <input
      className={`w-100 form-control rounded-0 border-0 search-input ${SHstyle.searchInput}`}
      type="search"
      placeholder="Search"
    />
    <button
      type="submit"
      className={`btn btn-icon search-submit pr-3 pr-lg-0 ${SHstyle.searchSubmit}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="30"
        viewBox="0 0 27 30"
      >
        <path d="M19.41 18.555a8.474 8.474 0 001.652-5.024c0-4.704-3.827-8.531-8.53-8.531C7.826 5 4 8.827 4 13.531c0 4.704 3.827 8.532 8.531 8.532 1.88 0 3.613-.619 5.024-1.652L23.145 26 25 24.144l-5.59-5.589zm-6.879.883a5.913 5.913 0 01-5.906-5.907 5.913 5.913 0 015.906-5.906 5.913 5.913 0 015.906 5.906 5.913 5.913 0 01-5.906 5.907z" />
      </svg>
    </button>
  </form>
)

export default Search
