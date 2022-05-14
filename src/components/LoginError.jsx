import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function LoginError() {
  const navigate = useNavigate();

  return (
    <main className="container pt-5 w-50">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <div className="card flex-row my-1 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex"></div>

            <div className="card-body p-5 p-sm-5">
              <div className="mb-5 text-center">
                <img
                  width="46"
                  height="38"
                  src="https://abs.twimg.com/errors/logo46x38.png"
                  alt="Twitter"
                />
              </div>

              <h5 className="card-title fw-bolder mb-4 fs-3">
                Inicia sesión en Twitter
              </h5>

              <div className="d-grid">
                <h6 className="text-danger">
                  Usuario o contraseña incorrectos.{" "}
                </h6>
                <Link to="/login" onClick={() => navigate(-1)} className="small">
                  Intenta de nuevo
                </Link>
              </div>
              <p className="d-block mt-4 small">
                ¿No tienes una cuenta?{" "}
                <Link to={"/register"} className="">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginError;
