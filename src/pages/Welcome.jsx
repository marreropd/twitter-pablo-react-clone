import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="vh-100 vw-100 overflow-hidden">
      <div className="row">
        <div
          id="left-row"
          className="col-lg-7 d-flex align-items-center justify-content-center"
        >
          <div className="">
            <svg
              style={{ fill: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width={399}
              height={332}
              viewBox="0, 0, 24, 24"
            >
              {" "}
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
        </div>
        <div className="col-lg-5">
          <section className="m-5">
            <img
              width={46}
              height={38}
              srcSet="https://abs.twimg.com/errors/logo46x38.png 1x https://abs.twimg.com/errors/logo46x38@2x.png 2x"
              src={"https://abs.twimg.com/errors/logo46x38.png"}
              alt="Twitter"
            />
            <h1 className="mt-5 display-2 fw-bolder">
              Lo que está pasando ahora
            </h1>
            <h2 className="mt-5 fw-bolder">Únete a Twitter hoy mismo.</h2>
            <Link to="/register" className="btn btn-primary rounded-pill mt-5">
              Registrate con tu email
            </Link>
            <p className="text-x-small mb-4">
              Al registrarte aceptas{" "}
              <a className="link" href="#">
                Términos de servicio
              </a>{" "}
              y la
              <a className="link" href="#">
                Política de privacidad
              </a>
              , incluida la política de
              <a className="link" href="#">
                Uso de Cookies
              </a>
              .
            </p>
            <p className="fw-bolder">¿Ya tienes una cuenta?</p>
            <Link to="/login" className="btn btn-outline-primary rounded-pill">
              Iniciar sesión
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
