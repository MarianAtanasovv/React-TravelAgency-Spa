import { Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";
import * as authService from "../services/authService";
import { useContext, useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    authService.logout(user.accessToken).then(() => {
      logout();
      navigate("/");
    });
  }, []);

  return null;
};

export default Logout;
