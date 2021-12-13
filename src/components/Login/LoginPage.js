import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import "../Login/login.css";
import * as authService from "../../services/authService";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);
        addNotification("You logged in successfully", types.success);
        navigate("/locations");
      })
      .catch((error) => {
        // TODO: notification
      });
  };

  return (
    <div>
      <form id="login-box" onSubmit={onLoginHandler} method="POST">
        <div className="left">
          <h1>Sign in</h1>

          <input type="text" name="email" placeholder="Email" />
          {/* <input type="text" name="email" placeholder="E-mail" /> */}
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="repeat-password"
            placeholder="Retype password"
          />

          <input type="submit" name="signup_submit" value="Login" />
        </div>

        <div className="right">
          <img
            className="register-img"
            src="https://www.wallpaperbetter.com/wallpaper/416/24/994/costa-brava-in-spain-1080P-wallpaper-middle-size.jpg"
          ></img>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
