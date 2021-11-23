import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
  let authenticatedArea = (
    <ul id="navigation">
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
        <Link to="/locations">Locations</Link>
      </li>

      <li>
        <Link to="/news">News</Link>
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
      {/* <!-- Preloader Start --> */}
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
                      <nav>
                        {isAuthenticated ? authenticatedArea : guestArea}
                      </nav>
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
