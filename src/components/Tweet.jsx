import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import calculateSince from "../calculateSince";
import tweetActions from "../redux/tweetActions";

function Tweet({ tweet, i, currentUser, userData }) {
  const store = useSelector((state) => state);

  // redirect
  const navigate = useNavigate();
  const location = useLocation();
  //

  const dispatch = useDispatch();

  async function handleLike(tweetId) {
    dispatch(tweetActions.like(store.user.id, tweetId));
    try {
      const response = await axios({
        method: "POST",
        url: `https://twitter-api.vercel.app/like/tweet/${tweetId}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
    } catch (error) {
      console.log("Error: ", error);
    }

    // redirect
    if (location.state?.from) {
      navigate(location.state.from);
    }
    //
  }

  return (
    <div>
      <div className="px-3 py-2 hover-light pointer">
        <div className="d-flex">
          <div className="flex-shrink-0 mt-1">
            {currentUser ? (
              <Link to={`/${tweet.user.username}`}>
                <img
                  className="rounded-circle --img-circle-fit"
                  src={currentUser.avatar}
                  height={48}
                  width={48}
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
              </Link>
            ) : (
              <Link to={`/${tweet.user.username}`}>
                <img
                  className="rounded-circle --img-circle-fit"
                  src={tweet.user.avatar}
                  height={48}
                  width={48}
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
              </Link>
            )}
          </div>
          <div className="flex-grow-1 ms-2">
            <div className="tweet-header mb-0">
              {currentUser ? (
                <Link
                  to={`/${currentUser.username}`}
                  href="/profile/<%= tweet.user._id %>"
                  className="fw-bold text-dark"
                >
                  {currentUser.firstname} {currentUser.lastname}{" "}
                </Link>
              ) : (
                <Link
                  to={`/${tweet.user.username}`}
                  href="/profile/<%= tweet.user._id %>"
                  className="fw-bold text-dark"
                >
                  {tweet.user.firstname} {tweet.user.lastname}{" "}
                </Link>
              )}

              <span className="text-secondary">
                @{tweet.user.username} · {calculateSince(tweet.createdAt)}
              </span>
            </div>
            <div className="tweet-body d-flex text-break"> {tweet.content}</div>
            <div className="tweet-footer d-flex align-items-center justify-content-between pe-4 mt-3 mb-0">
              <i
                className="bi bi-chat text-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
              ></i>
              <i
                className="bi bi-arrow-repeat text-secondary fs-5 mt-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
              ></i>

              <button className=" bg-transparent border-0" type="submit">
                {store.tweets[i].likes.includes(store.user.id) ? (
                  <i
                    onClick={() => {
                      handleLike(tweet._id);
                    }}
                    className="bi bi-heart-fill text-danger"
                  ></i>
                ) : (
                  <>
                    <i
                      className="bi bi-heart text-secondary"
                      onClick={() => {
                        handleLike(tweet._id);
                      }}
                    ></i>
                  </>
                )}
                {store.tweets[i].likes.includes(store.user.id) ? (
                  <span className="text-danger ms-2">
                    {" "}
                    {tweet.likes.length}{" "}
                  </span>
                ) : (
                  tweet.likes.length > 0 && (
                    <span className="text-secondary ms-2">
                      {" "}
                      {tweet.likes.length}{" "}
                    </span>
                  )
                )}
              </button>
              {/*   </form> */}

              <i
                className="bi bi-upload text-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
              ></i>
            </div>
          </div>
          <Dropdown drop="start">
            <Dropdown.Toggle
              variant="transparent"
              id="dropdown-tweet"
              className="d-flex align-items-center justify-content-center rounded-circle fw-bold py-0 px-1"
            >
              <i className="bi bi-three-dots"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow rounded-3 py-0">
              <Dropdown.Item className="py-3">
                <i className="bi bi-eraser me-2 fs-5"></i>Borrar tweet
              </Dropdown.Item>

              <Dropdown.Item className="py-3">
                <i className="bi bi-person-x me-2 fs-5"></i>Dejar de seguir a
              </Dropdown.Item>
              <Dropdown.Item className="py-3">
                <i className="bi bi-person-plus me-2 fs-5"></i>Seguir a
              </Dropdown.Item>
              <Dropdown.Item className="py-3">
                <i className="bi bi-mic-mute me-2 fs-5"></i>Silenciar a
              </Dropdown.Item>
              <Dropdown.Item className="py-3">
                <i className="bi bi-slash-circle me-2 fs-5"></i>Bloquear a
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <hr className="my-0 bg-secondary" />
    </div>
  );
}

export default Tweet;
