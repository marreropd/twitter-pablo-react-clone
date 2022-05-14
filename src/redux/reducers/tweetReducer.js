function tweetReducer(state = [], action) {
  switch (action.type) {
    case "STORE_TWEETS":
      console.log(action.payload);
      return action.payload;
    case "CREATE":
      return [action.payload, ...state];
    case "REMOVE":
      break;
    // Remover del array de tareas la tarea del action.payload.
    // Retornar el nuevo estado.
    case "LIKE":
      return state.map((tweet) => {
        if (tweet._id !== action.payload.tweetId) return tweet;
        if (tweet.likes.includes(action.payload.userId)) {
          return {
            ...tweet,
            likes: tweet.likes.filter((item) => item !== action.payload.userId),
          };
        } else {
          return {
            ...tweet,
            likes: [...tweet.likes, action.payload.userId],
          };
        }
      });
    default:
      return state;
  }
}

export default tweetReducer;
