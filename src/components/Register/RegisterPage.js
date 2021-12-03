import "../Register/style.css";

import { useContext } from "react";
import { useNavigate } from "react-router";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/authContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    authService.register(email, password).then((authData) => {
      login(authData);

      navigate("/dashboard");
    });
  };
  return (
    <div>
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          <form method="POST" onSubmit={registerSubmitHandler}>
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
            />

            <input type="submit" name="signup_submit" value="Sign me up" />
          </form>
        </div>

        <div class="right">
          <img
            class="register-img"
            src="https://thepointsguy.global.ssl.fastly.net/uk/originals/2020/10/GettyImages-1170100071.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
