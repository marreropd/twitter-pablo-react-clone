const tweetActions = {
  storeTweets: function (data) {
    return { type: "STORE_TWEETS", payload: data };
  },
  create: function (data) {
    return { type: "CREATE", payload: data };
  },
  remove: { type: "REMOVE" },

  like: function (userId, tweetId) {
    return { type: "LIKE", payload: { userId, tweetId } };
  },
};

export default tweetActions;
