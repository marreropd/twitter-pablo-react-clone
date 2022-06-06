import React from "react";
import { Link } from "react-router-dom";

function NavBarHome({ userData }) {
  return (
    <header className="d-flex navbar sticky-top navbar-light bg-white header-opacity">
      <div className="d-flex align-items-center justify-content-between w-100">
        <Link to={`/${userData.username}`} className="mx-3">
          <img
            className="rounded-circle --img-circle-fit"
            src={userData.avatar}
            height="35"
            width="35"
            alt="..."
          />
        </Link>
        <a
          href="/home"
          className="h4 text-decoration-none jusify-self-start text-dark py-2 mt-1 me-auto "
        >
          Inicio
        </a>
        <div>
          {" "}
          <i className="bi bi-stars fs-4 me-3"></i>
        </div>
      </div>
    </header>
  );
}

export default NavBarHome;
