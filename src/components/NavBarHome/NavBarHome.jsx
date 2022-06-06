import React, { useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasProfile from "../OffCanvas/OffCanvasProfile";
import styles from "./NavBarHome.css";

function NavBarHome({ userData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="d-flex navbar sticky-top navbar-light bg-white header-opacity">
      <div className="d-flex align-items-center justify-content-between w-100">
        <OffCanvasProfile
          show={show}
          handleClose={handleClose}
          userData={userData}
        />

        <img
          id="open-offcanvas"
          className="rounded-circle --img-circle-fit mx-3 pointer"
          src={userData.avatar}
          height="35"
          width="35"
          alt="..."
          onClick={handleShow}
        />
        <Link id="link-to-profile" to={`/${userData.username}`}>
          <img
            className="rounded-circle --img-circle-fit pointer mx-3"
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
