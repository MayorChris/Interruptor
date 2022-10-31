/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [_user, set_User] = React.useState(userData);
  console.log(userData);
  _user = typeof _user === "string" ? JSON.parse(_user) : _user;
  console.log("AuthContext");
  console.log(_user);
  return <AuthContext.Provider value={{ _user, set_User }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  userData: PropTypes.any,
  children: PropTypes.any,
};

export const useAuth = () => React.useContext(AuthContext);
