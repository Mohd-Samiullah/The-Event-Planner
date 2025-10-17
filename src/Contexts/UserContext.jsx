import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducers/UserReducer";

const UserContext = createContext();

function userLocalId() {
  let id = sessionStorage.getItem("userId");
  console.log(JSON.parse(id) !== null, JSON.parse(id));
  if (JSON.parse(id) !== null) {
    if (JSON.parse(id).split("").length > 0) {
      return JSON.parse(id);
    } else {
      return false;
    }
  } else return false;
}

function userLocalToken() {
  let token = sessionStorage.getItem("userToken");
  if (JSON.parse(token) !== null) {
    if (JSON.parse(token).split("").length > 0) {
      return JSON.parse(token);
    } else {
      return false;
    }
  } else return false;
}

function userLocalLocation() {
  let location = sessionStorage.getItem("userLocation");
  if (JSON.parse(location) !== null) {
    if (JSON.parse(location).split("").length > 0) {
      return JSON.parse(location);
    } else {
      return false;
    }
  } else return false;
}

function userLocalInfo() {
  let user = sessionStorage.getItem("userInfo");
  if (JSON.parse(user) !== null) {
    if (JSON.parse(user)) {
      return JSON.parse(user);
    } else {
      return false;
    }
  } else return false;
}

const initialState = {
  userId: userLocalId() || null,
  user: userLocalInfo() || null,
  userToken: userLocalToken() || null,
  location: userLocalLocation() || null,
  isLoading: false,
  isError: false
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUser = (user, token) => {
    dispatch({ type: "SET_LOADING" });
    try {
      dispatch({ type: "SET_USER", payload: { user, token } });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("Logout");
  };

  // add data to local storage
  useEffect(() => {
    sessionStorage.setItem("userId", JSON.stringify(state.userId));
    sessionStorage.setItem("userToken", JSON.stringify(state.userToken));
    sessionStorage.setItem("userLocation", JSON.stringify(state.location));
    sessionStorage.setItem("userInfo", JSON.stringify(state.user));
    console.log(state);
  }, [state]);

  return (
    <UserContext.Provider value={{ ...state, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
