const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_USER":
      let { user, token } = action.payload;
      return {
        ...state,
        userId: user.userId,
        userToken: token,
        user: user,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        userToken: null,
        user: null,
        location: null,
      };

    default:
      return state;
  }
};
export default userReducer;
