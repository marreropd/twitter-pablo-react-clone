// PROFILE
/* <TweetList
      url={userTweetsUrl}
      currentUser={currentUser}
      userData={userData}
/> */

// HOME
/* <TweetList url={tweetsUrl} userData={userData} /> */

// TWEETLIST
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import tweetActions from "../redux/tweetActions";
// import Tweet from "./Tweet";

// function TweetList({ url, currentUser }) {
//   console.log(url);
//   const store = useSelector((state) => state);
//   const username = store.user.username;
//   const [userData, setUserData] = useState({});
//   const [tweets, setTweets] = useState([]);
//   const dispatch = useDispatch();

//   // OBTENER DATOS DEL USUARIO LOGUEADO
//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = async () => {
//     try {
//       const response = await axios({
//         method: "GET",
//         url: `http://localhost:8000/profile/${username}`,
//         // headers: { Authorization: `Bearer ${store.user.accessToken}` },
//       });
//       response && setUserData(response.data[0]);
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   // CARGAR TWEETS
//   useEffect(() => {
//     getTweets();
//   }, []);

//   const getTweets = async () => {
//     try {
//       const response = await axios({
//         method: "GET",
//         url: url,
//         headers: { Authorization: `Bearer ${store.user.accessToken}` },
//       });
//       // setTweetsList(response.data);
//       (await response.data) && setTweets(response.data);
//       dispatch(tweetActions.storeTweets(response.data));
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   return (
//     tweets.length > 0 && (
//       <section>
//         {store.tweets.map((tweet, i) => (
//           <Tweet
//             userData={userData}
//             currentUser={currentUser}
//             key={tweet._id}
//             tweet={tweet}
//             i={i}
//           />
//         ))}
//       </section>
//     )
//   );
// }

// export default TweetList;
