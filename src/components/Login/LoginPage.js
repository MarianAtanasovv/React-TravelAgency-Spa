import "../Login/style.css";

const LoginPage = () => {
  return (
    <div>
      <div id="login-box">
        <div class="left">
          <h1>Sign in</h1>

          <input type="text" name="username" placeholder="Username" />
          {/* <input type="text" name="email" placeholder="E-mail" /> */}
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <input type="submit" name="signup_submit" value="Sign in" />
        </div>

        <div class="right">
          <img
            class="register-img"
            src="https://www.wallpaperbetter.com/wallpaper/416/24/994/costa-brava-in-spain-1080P-wallpaper-middle-size.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
