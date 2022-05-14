import React, { useEffect, useState } from "react";
import userActions from "../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";

function Following({}) {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [following, setFollowing] = useState([]);
  const username = store.user.username;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/profile/${username}`,
        // headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      response && setUserData(response.data[0]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  async function getFollowing() {
    try {
      console.log(params.username);
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/profile/following/${params.username}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      response && setFollowing(response.data);
      // response && setFollowingList(response.data[0].following);
      // console.log(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getFollowing();
  }, []);

  console.log(following);

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
                <h2 className="fs-6 text-secondary">@{userData.username}</h2>
              </div>
            </header>
            <hr />

            {following.map((following) => (
              <div key={following._id}>
                <div className="d-flex align-items-center justify-content-space-around mx-3 my-4">
                  <div>
                    <Link
                      to={`/${following.username}`}
                      className="fw-bold text-black user-suggestion m-0"
                    >
                      <img
                        className="rounded-circle me-2"
                        src={following.avatar}
                        height="48"
                        width="48"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Link
                        to={`/${following.username}`}
                        className="fw-bold text-black user-suggestion m-0"
                      >
                        {following.firstname} {following.lastname}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/${following.username}`}
                        className="text-secondary text-decoration-none m-0"
                      >
                        @{following.username}
                      </Link>
                    </div>
                  </div>
                  <div className="justify-content-end ms-auto">
                    <form
                      action="/profile/following/<%= userById.id %>"
                      method="POST"
                    >
                      {/* si soy yo */}
                      <div className="d-none"></div>
                      {/* si no */}
                      <button
                        className="btn rounded-pill border btn-sideBarLeft fw-bold mt-2 me-4"
                        type="submit"
                      >
                        Dejar de seguir
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </main>
          <div id="right-col" className="col-lg-4 ps-4 pe-5">
            <SideBarRight />
          </div>
        </div>
      </div>
    )
  );
}

export default Following;
