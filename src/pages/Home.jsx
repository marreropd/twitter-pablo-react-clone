import React, { useEffect, useState } from "react";
import SideBarLeft from "../components/SideBarLeft";
import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import axios from "axios";
import tweetActions from "../redux/tweetActions";

import { useDispatch, useSelector } from "react-redux";
import SideBarRight from "../components/SideBarRight";

function Home() {
  // const userStore = useSelector((state) => state.user);
  const store = useSelector((state) => state);
  const username = store.user.username;
  const [userData, setUserData] = useState({});
  // const sortTweets = useSelector((state) =>
  //   state.tweets.sort(function (x, y) {
  //     return x.createdAt - y.createdAt;
  //   })
  // );

  const dispatch = useDispatch();

  // OBTENER DATOS DEL USUARIO LOGUEADO
  useEffect(() => {
    getUser();
  }, []);

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

  // CARGAR TWEETS EN LA HOME
  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://twitter-api-opal.vercel.app/tweets",
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
      // setTweetsList(response.data);
      (await response.data) &&
        dispatch(tweetActions.storeTweets(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container">
      <div className="row g-0 bg-white">
        <div id="left-col" className="col-lg-3 pb-5 mb-5">
          <SideBarLeft userData={userData} />
        </div>

        <div id="center-col" className="col-lg-5 bg-white">
          <header className="d-flex navbar sticky-top navbar-light bg-white justify-content-start header-opacity">
            <div className="d-flex align-items-center justify-content-between py-0 px-0 ms-3 w-100">
              <a
                href="/home"
                className="h4 text-decoration-none text-dark py-2"
              >
                Inicio
              </a>
              <i className="bi bi-stars fs-4 me-3"></i>
            </div>
          </header>
          <CreateTweet userData={userData} />
          {store.tweets.map((tweet, i, userData) => (
            <Tweet key={tweet._id} tweet={tweet} i={i} />
          ))}
        </div>

        <div id="right-col" className="col-lg-4 ps-4 pe-5">
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
