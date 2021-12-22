import "../Register/register.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/authContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import { Alert } from "react-bootstrap";
import * as validationHelper from "../common/ValidationHelper";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [errors, setErrors] = useState({ name: false });

  const { addNotification } = useNotificationContext();
  const timeout = () => {
    setTimeout(() => {
      setErrors((state) => ({
        ...state,
        name: "",
      }));
    }, 2000);
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let { email, password, confirmPassword } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (!validationHelper.emailRegex.test(email)) {
      setErrors((state) => ({
        ...state,
        name: "Enter a valid email",
      }));

      timeout();

      return;
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setErrors((state) => ({
        ...state,
        name: "Password can't be less 6 symbols!",
      }));

      timeout();

      return;
    } else if (password != confirmPassword) {
      setErrors((state) => ({
        ...state,
        name: "Passwords should match!",
      }));

      timeout();

      return;
    } else if (password == "" || confirmPassword == "" || email == "") {
      setErrors((state) => ({
        ...state,
        name: "Fields can't be empty!",
      }));

      timeout();

      return;
    }

    authService
      .register(email, password)
      .then((authData) => {
        if (!authData.ok) {
          if (authData.code == 409) {
            setErrors((state) => ({
              ...state,
              name: "Email taken",
            }));

            timeout();
            throw Error(authData.message);
          }
        }

        login(authData);
        addNotification("You registered successfully", types.success);

        navigate("/");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <form method="POST" onSubmit={registerSubmitHandler}>
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype password"
            />
            <Alert className="alert-box" variant="danger" show={errors.name}>
              {errors.name}
            </Alert>
            <input type="submit" name="signup_submit" value="Sign me up" />
          </form>
        </div>

        <div className="right">
          <img
            className="register-img"
            src="https://thepointsguy.global.ssl.fastly.net/uk/originals/2020/10/GettyImages-1170100071.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
