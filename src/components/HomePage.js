const HomePage = () => {
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
                        <ul id="navigation">
                          <li>
                            <a href="/home">Home</a>
                          </li>
                          <li>
                            <a href="/about-us">About</a>
                          </li>
                          <li>
                            <a href="/categories">Catagories</a>
                          </li>
                          <li>
                            <a href="/locations">Locations</a>
                          </li>

                          <li>
                            <a href="/news">News</a>
                          </li>

                          <li className="login">
                            <a href="#">
                              <i className="ti-user"></i> Sign in or Register
                            </a>
                          </li>
                        </ul>
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
      <main />

      {/* <!-- Hero Area Start--> */}
      <div className="slider-area hero-overly">
        <div className="single-slider hero-overly  slider-height d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                {/* <!-- Hero Caption --> */}
                <div className="hero__caption">
                  <span>Explore the city</span>
                  <h1>Discover Great Places</h1>
                </div>
                {/* <!--Hero form --> */}
                <form action="#" className="search-box">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="select-form">
                    <div className="select-itms">
                      <select name="select" id="select1">
                        <option value="">All Catagories</option>
                        <option value="">Catagories One</option>
                        <option value="">Catagories Two</option>
                        <option value="">Catagories Three</option>
                        <option value="">Catagories Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="search-form">
                    <a href="#">Search</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
