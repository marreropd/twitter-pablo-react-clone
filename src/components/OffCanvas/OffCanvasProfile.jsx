import React, { useState } from "react";
import { Dropdown, Offcanvas } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function OffCanvasProfile({ show, handleClose, userData }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    dispatch({ type: "LOG_OUT" });
    <Navigate to="/login" />;
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="py-1">
            <a
              className="btn rounded-pill align-items-end pt-3"
              href={`/${userData.username}`}
            >
              <div className="d-flex flex-shrink-0">
                <img
                  className="rounded-circle --img-circle-fit"
                  src={userData.avatar}
                  height="48"
                  width="48"
                  alt="..."
                />
                <div className="d-flex flex-column tex-center align-items-start ms-2">
                  <p className="my-0 ms-1 fw-bold">
                    {userData.firstname} {userData.lastname}{" "}
                  </p>
                  <p className="ms-0">@{userData.username} </p>
                </div>
              </div>
            </a>
            <hr className="m-0 bg-secondary pointer" />
            Agregar una cuenta existente
            <div onClick={handleClick} className="py-3 pointer">
              Cerrar la sesión de @{userData.username}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasProfile;
