import React, { useEffect, useState } from "react";
import userActions from "../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";

function Followers({}) {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [followers, setFollowers] = useState([]);
  const username = store.user.username;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://twitter-api.vercel.app/profile/followers/${params.username}`,
        // headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      response && console.log(response.data);
      response && setUserData(response.data[0]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);

  async function getFollowers() {
    try {
      const response = await axios({
        method: "GET",
        url: `https://twitter-api.vercel.app/profile/followers/${params.username}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      response && console.log(response.data);
      response && setFollowers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    userData && (
      <div className="container">
        <div className="row g-0 bg-white">
          {/* Sidebar Left */}
          <div id="left-col" className="col-lg-3 pb-5 mb-5">
            <SideBarLeft userData={userData} setUserData={setUserData} />
          </div>

          {/* Main */}
          <main id="center-col" className="col-lg-5 bg-white">
            <header className="d-flex navbar sticky-top navbar-light bg-white justify-content-start header-opacity">
              <div
                id="arrowProfile2"
                className="d-flex align-items-center justify-content-center rounded-circle py-0 px-0 btn-sideBarLeft ms-3"
              >
                <Link to="" onClick={() => navigate(-1)}>
                  <i
                    id="arrowProfile"
                    className="bi bi-arrow-left-short text-dark"
                  ></i>
                </Link>
              </div>

              <div className="d-flex flex-column ms-4">
                <h1 className="fs-5 text-dark fw-bold mb-0">
                  {userData.firstname} {userData.lastname}
                </h1>
                <h2 className="fs-6 text-secondary">@{userData.username}5</h2>
              </div>
            </header>
            <hr />

            {followers.map((follower) => (
              <div key={follower._id}>
                <div className="d-flex align-items-center justify-content-space-around mx-3 my-4">
                  <div>
                    <Link
                      to={`/${follower.username}`}
                      className="fw-bold text-black user-suggestion m-0"
                    >
                      <img
                        className="rounded-circle me-2"
                        src={follower.avatar}
                        height="48"
                        width="48"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Link
                        to={`/${follower.username}`}
                        className="fw-bold text-black user-suggestion m-0"
                      >
                        {follower.firstname} {follower.lastname}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/${follower.username}`}
                        className="text-secondary text-decoration-none m-0"
                      >
                        {follower.username}
                      </Link>
                    </div>
                  </div>
                  <div className="justify-content-end ms-auto">
                    {params.username === userData.username ? (
                      ""
                    ) : userData &&
                      userData.followers.includes(userData._id) ? (
                      <button
                        className="btn rounded-pill border btn-sideBarLeft text-dark fw-bold mt-2 me-4"
                        type="submit"
                      >
                        Dejar de seguir
                      </button>
                    ) : (
                      <button
                        className="btn rounded-pill border btn-sideBarLeft text-dark fw-bold mt-2 me-4"
                        type="submit"
                        // onClick={(e) => handleClick(e)}
                      >
                        Seguir
                      </button>
                    )}

                    <form
                      action="/profile/followers/<%= userById.id %>"
                      method="POST"
                    >
                      {/* si soy yo */}
                      <div className="d-none"></div>
                      {/* si lo sigo */}
                      <button
                        className="btn rounded-pill border btn-sideBarLeft fw-bold mt-2 me-4"
                        type="submit"
                      >
                        Dejar de seguir
                      </button>
                      {/* si no lo sigo */}
                      <button
                        className="btn btn-dark rounded-pill border fw-bold mt-2 me-4"
                        type="submit"
                      >
                        Seguir
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </main>
          <div id="right-col" className="col-lg-4 ps-4 pe-5">
            {" "}
            <SideBarRight />
          </div>
        </div>
      </div>
    )
  );
}

export default Followers;
