import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import userActions from "../redux/userActions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8000/tokens",
        data: {
          email: email,
          password: password,
        },
      });
      response.data && dispatch(userActions.logIn(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <main className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7">
          <div className="card flex-row my-1 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex"></div>

            <div className="card-body p-5 p-sm-5">
              <div className="mb-5 text-center">
                <img
                  width="46"
                  height="38"
                  // srcset="
                  //       https://abs.twimg.com/errors/logo46x38.png    1x,
                  //       https://abs.twimg.com/errors/logo46x38@2x.png 2x
                  //     "
                  src="https://abs.twimg.com/errors/logo46x38.png"
                  alt="Twitter"
                />
              </div>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="px-5"
              >
                <h5 className="card-title fw-bolder mb-4 fs-3">
                  Inicia sesión en Twitter
                </h5>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Dirección de email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div className="d-grid">
                  <button
                    id="btn-register"
                    className="btn btn-lg btn-dark rounded-pill fw-bold"
                    type="submit"
                  >
                    Iniciar sesión
                  </button>
                </div>
                <p className="d-block mt-4 small">
                  ¿No tienes una cuenta?{" "}
                  <Link to={"/register"} className="">
                    Regístrate
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
