const userActions = {
  // register: { type: "REGISTER" },
  logIn: function (data) {
    console.log(data);
    return { type: "LOG_IN", payload: data };
  },
  logOut: { type: "LOG_OUT" },
  follow: { type: "FOLLOW" },
};

export default userActions;
