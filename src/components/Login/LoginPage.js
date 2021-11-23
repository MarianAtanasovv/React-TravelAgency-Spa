import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");

    authService.login(email);

    onLogin(email);

    navigate("/");
  };

  return (
    <div>
      <form id="login-box" onSubmit={onLoginHandler} method="post">
        <div className="left">
          <h1>Sign in</h1>

          <input type="text" name="username" placeholder="Username" />
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
