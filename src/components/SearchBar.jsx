import React from "react";

function SearchBar() {
  return (
    <header className="d-flex navbar sticky-top navbar-light bg-white justify-content-start header-opacity">
      <div className="input-group filter-search rounded-pill bg-light py-1">
        <span className="input-group-text border-0" id="input-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#70757a"
            className="bi bi-search fs-5"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </span>
        <input
          type="text"
          className="form-control input-search border-0 bg-light"
          id="searchInput"
          placeholder="Buscar en Twitter"
          tabIndex="-1"
          aria-label="Search..."
          aria-describedby="input-search"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
        />
      </div>
    </header>
  );
}

export default SearchBar;
