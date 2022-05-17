import React, { useEffect, useState } from "react";
// import tweetActions from "../redux/tweetActions";
import Tweet from "../components/Tweet";
import axios from "axios";

import { useDispatch, useSelector, useStore } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import { Link } from "react-router-dom";
import { es } from "date-fns/locale";
import { format } from "date-fns/";
import { parseISO } from "date-fns/esm";

function Profile() {
  const store = useSelector((state) => state);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const tweetList = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState();
  const [tweets, setTweets] = useState([]);

  const params = useParams();

  const username = store.user.username;

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUserTweets();
  }, []);

  async function getUserTweets() {
    try {
      const response = await axios({
        method: "GET",
        url: `https://twitter-api-opal.vercel.app/profile/${params.username}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });

      response && setCurrentUser(response.data[0]);
      response && setTweets(response.data[0].tweets);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  // ---- > PASAR FUNCION GETUSER A UN ARCHIVO YA QUE SE UTILIZA EN VARIOS LADOS ????????
  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://twitter-api-opal.vercel.app/profile/${username}`,
        // headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      response && setUserData(response.data[0]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  async function handleFollow() {
    // dispatch(tweetActions.like(store.user.id, tweetId));
    try {
      const response = await axios({
        method: "POST",
        url: `https://twitter-api-opal.vercel.app/user/follow/${params.username}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div className="container">
      <div className="row g-0 bg-white">
        <div id="left-col" className="col-lg-3 pb-5 mb-5">
          <SideBarLeft userData={userData} setUserData={setUserData} />
        </div>
        <div id="center-col" className="bg-white col-lg-5">
          <header className="d-flex navbar sticky-top navbar-light bg-white justify-content-start header-opacity">
            <div
              id="arrowProfile2"
              className="d-flex align-items-center justify-content-center rounded-circle py-0 px-0 btn-sideBarLeft ms-3"
            >
              <Link to="/" className="">
                <i
                  id="arrowProfile"
                  className="bi bi-arrow-left-short text-dark"
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column ms-4">
              <h1 className="fs-5 text-dark fw-bold mb-0">
                {currentUser && currentUser.firstname}{" "}
                {currentUser && currentUser.lastname}
              </h1>
              <h2 className="fs-6 text-secondary">
                {" "}
                {currentUser && currentUser.tweets.length} tweets
              </h2>
            </div>
          </header>
          {/*  ///////////// /////////// PROFILE  ////////////////// */}
          <div
            className="w-100"
            style={{
              backgroundImage: `url("https://i.postimg.cc/c137YgGp/Twitter-Backgrounds.jpg")`,
              height: "14rem",
            }}
          >
            <div className="position-relative">
              <img
                id="profile-img"
                className="rounded-circle border border-4 border-white
                position-absolute --img-circle-fit"
                src={currentUser && currentUser.avatar}
                height={150}
                width={150}
                alt="useravatar"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            {params.username === username ? (
              <a
                href="#"
                className="btn rounded-pill border btn-sideBarLeft text-dark fw-bold mt-2 me-4"
              >
                Editar perfil
              </a>
            ) : (
              ""
            )}
            {params.username === userData.username ? (
              ""
            ) : currentUser && currentUser.followers.includes(userData._id) ? (
              <button
                className="btn rounded-pill border btn-sideBarLeft text-dark fw-bold mt-2 me-4"
                type="submit"
                onClick={() => handleFollow()}
              >
                Dejar de seguir
              </button>
            ) : (
              <button
                className="btn rounded-pill border btn-sideBarLeft text-dark fw-bold mt-2 me-4"
                type="submit"
                onClick={() => handleFollow()}
              >
                Seguir
              </button>
            )}
          </div>

          <div
            className="d-flex align-items-center w-100"
            style={{ height: "20rem" }}
          >
            <div className="ms-3">
              <h1 className="fs-5 text-dark fw-bold mb-0">
                {" "}
                {currentUser && currentUser.firstname}{" "}
                {currentUser && currentUser.lastname}
              </h1>
              <h2 className="fs-6 text-secondary">
                @{currentUser && currentUser.username}
              </h2>
              <p>{currentUser && currentUser.description}</p>

              <p className="fs-6 text-secondary">
                <i className="bi bi-calendar3"></i> Se unió{" "}
                {currentUser &&
                  format(
                    parseISO(currentUser.createdAt),
                    "'en 'MMMM' del ' y ' ",
                    {
                      locale: es,
                    }
                  )}
              </p>
              <div>
                <span className="text-dark fw-bold">
                  {" "}
                  {currentUser && currentUser.following.length}{" "}
                </span>
                <Link
                  className="text-decoration-none"
                  to={`/${params.username}/following`}
                >
                  <span className="text-secondary">Siguiendo</span>
                </Link>

                <span className="text-dark fw-bold ms-3">
                  {"  "}
                  {currentUser && currentUser.followers.length}
                </span>
                <Link
                  className="text-decoration-none"
                  to={`/${params.username}/followers`}
                >
                  <span className="text-secondary"> Seguidores</span>
                </Link>
              </div>
            </div>
          </div>
          {/*   /////////////////////// TWETTSSS /////////////////////// */}
          <hr className="my-0 bg-secondary" />
          {tweets.map((tweet, i) => (
            <Tweet
              key={tweet._id}
              tweet={tweet}
              i={i}
              currentUser={currentUser}
            />
          ))}
        </div>
        <div id="right-col" className="col-lg-4 ps-4 pe-5">
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Profile;
