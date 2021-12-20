import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import "../Login/login.css";
import * as authService from "../../services/authService";
import * as validationHelper from "../common/ValidationHelper";
import { Alert } from "react-bootstrap";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotificationContext();
  const [errors, setErrors] = useState({ name: false });

  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      setErrors((state) => ({
        ...state,
        name: "",
      }));
    }, 2000);
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    let { email, password, confirmPassword } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (!validationHelper.emailRegex.test(email)) {
      setErrors((state) => ({
        ...state,
        name: "Enter a valid email!",
      }));

      timeout();
    }
    if (
      !validationHelper.inputFieldsValidator(password, confirmPassword, email)
    ) {
      setErrors((state) => ({
        ...state,
        name: "Fields can't be empty!",
      }));

      timeout();

      return;
    }

    if (!validationHelper.passwordValidator(password, confirmPassword)) {
      setErrors((state) => ({
        ...state,
        name: "Passwords should match!",
      }));
      timeout();
    }

    authService
      .login(email, password)
      .then((authData) => {
        if (!authData.ok) {
          if (authData.code == 403) {
            setErrors((state) => ({
              ...state,
              name: "Wrong credentials!",
            }));

            timeout();
            throw Error(authData.message);
          }
        } else {
          login(authData);

          addNotification("You logged in successfully!", types.success);

          navigate("/locations");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form id="login-box" onSubmit={onLoginHandler} method="POST">
        <div className="left">
          <h1>Sign in</h1>

          <input type="text" name="email" placeholder="Email" />

          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Retype password"
          />
          <Alert variant="danger" show={errors.name}>
            {errors.name}
          </Alert>
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
