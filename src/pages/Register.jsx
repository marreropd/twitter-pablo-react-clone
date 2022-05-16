import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  // const [image, setImage] = useState({})
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (user) => {
    user.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "https://twitter-api.vercel.app/users",
        data: {
          firstname: firstname,
          lastname: lastname,
          username: username,
          // avatar: `img/${image.newFilename}`,
          email: email,
          password: password,
          description: description,
        },
      });
      console.log(response.data);
      // setUser([...user, response.data])
    } catch (error) {
      console.log("Error: ", error);
    }
    setFirstname("");
    setLastname("");
    setUsername("");
    setDescription("");
    setEmail("");
    setPassword("");
  };

  return (
    <main
      className="container"
      // style="width: 50%"
    >
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <div className="card flex-row my-1 border-0 shadow rounded-3">
            <div className="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
            </div>

            <div className="card-body p-5 p-sm-5">
              <div className="mb-4 text-center">
                <img
                  width="46"
                  height="38"
                  srcSet="
                    https://abs.twimg.com/errors/logo46x38.png    1x,
                    https://abs.twimg.com/errors/logo46x38@2x.png 2x
                  "
                  src="https://abs.twimg.com/errors/logo46x38.png"
                  alt="Twitter"
                />
              </div>

              <form
                className="px-5"
                onSubmit={(user) => {
                  handleSubmit(user);
                }}
              >
                <h5 className="card-title fw-bolder mb-4 fs-3">
                  Crea tu cuenta
                </h5>
                <div className="form-floating mb-3">
                  <input
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="floatingInputFirstname"
                    placeholder="Nombre"
                    required
                  />
                  <label htmlFor="floatingInputFirstname">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    type="text"
                    name="lastname"
                    className="form-control"
                    id="floatingInputLastname"
                    placeholder="Apellido"
                    required
                  />
                  <label htmlFor="floatingInputLastname">Apellido</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    name="username"
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="Username"
                    required
                  />
                  <label htmlFor="floatingInputUsername">Username</label>
                </div>
                {/* 
                <div className="form-floating mb-3">
                  <input
                    value={image}

                    type="file"
                    name="image"
                    className="form-control py-3"
                    id="floatingInputImage"
                    required
                  />
                </div> */}

                <div className="form-floating">
                  <textarea
                    className="form-control mb-3"
                    placeholder="Descripción"
                    name="description"
                    id="floatingTextAreaDescription"
                    maxLength="200"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    // style="height: 11rem"
                  ></textarea>
                  <label htmlFor="floatingTextarea">
                    Escribe una descripción sobre tí
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    name="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="email"
                    required
                  />
                  <label htmlFor="floatingInputEmail">Dirección de email</label>
                </div>

                <div className="form-floating mb-5">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    minLength="4"
                    required
                  />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div className="d-grid">
                  <button
                    id="btn-register"
                    className="btn btn-lg btn-dark rounded-pill fw-bold"
                    type="submit"
                  >
                    Registrarse
                  </button>
                </div>
                <div className="mt-4">
                  <p className="">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="ps-1 small">
                      Iniciar sesión
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
