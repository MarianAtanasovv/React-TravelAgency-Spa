import "../Register/style.css";

const RegisterPage = () => {
  return (
    <div>
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <input type="submit" name="signup_submit" value="Sign me up" />
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
