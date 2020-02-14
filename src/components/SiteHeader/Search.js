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
      <img
        style={{ maxWidth: "28px" }}
        src="/images/navigation-search.png"
        alt="Search"
      />
    </button>
  </form>
)

export default Search
