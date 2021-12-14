import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  let authenticatedArea = (
    <ul id="navigation">
      <span className="welcome-span">Welcome, {user.email}</span>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/categories">Catagories</Link>
      </li>

      <li>
        <Link to="/create-location">Create Location</Link>
      </li>

      <li>
        <Link to="/locations">Locations</Link>
      </li>

      <li>
        <Link to="/news">News</Link>
      </li>

      <li className="logout">
        <Link to="/user-profile">
          <i className="ti-user"></i> Profile
        </Link>
      </li>
      <li className="logout">
        <Link to="/logout">
          <i className="ti-user"></i> Logout
        </Link>
      </li>
    </ul>
  );
  let guestArea = (
    <ul id="navigation">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li className="login">
        <Link to="/login-page">
          <i className="ti-user"></i> Login
        </Link>
      </li>
      <li className="register">
        <Link to="/register-page">
          <i className="ti-user"></i> Register
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="App">
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <header>
        {/* <!-- Header Start --> */}
        <div className="header-area header-transparent">
          <div className="main-header">
            <div className="header-bottom  header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  {/* <!-- Logo --> */}
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-8">
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>{user.email ? authenticatedArea : guestArea}</nav>
                    </div>
                  </div>
                  {/* <!-- Mobile Menu --> */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
    </div>
  );
};
export default Header;
