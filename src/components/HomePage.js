const HomePage = () => {
  return (
    <div className="App">
      <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
          <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
              <img src="assets/img/logo/loder.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Preloader Start --> */}
      <header>
        {/* <!-- Header Start --> */}
        <div class="header-area header-transparent">
          <div class="main-header">
            <div class="header-bottom  header-sticky">
              <div class="container-fluid">
                <div class="row align-items-center">
                  {/* <!-- Logo --> */}
                  <div class="col-xl-2 col-lg-2 col-md-1">
                    <div class="logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-md-8">
                    {/* <!-- Main-menu --> */}
                    <div class="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="catagori.html">Catagories</a>
                          </li>
                          <li>
                            <a href="listing.html">Listing</a>
                          </li>
                          <li>
                            <a href="#">Page</a>
                            <ul class="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                              <li>
                                <a href="listing_details.html">
                                  Listing details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li class="add-list">
                            <a href="listing_details.html">
                              <i class="ti-plus"></i> add Listing
                            </a>
                          </li>
                          <li class="login">
                            <a href="#">
                              <i class="ti-user"></i> Sign in or Register
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* <!-- Mobile Menu --> */}
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
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
      <div class="slider-area hero-overly">
        <div class="single-slider hero-overly  slider-height d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-9">
                {/* <!-- Hero Caption --> */}
                <div class="hero__caption">
                  <span>Explore the city</span>
                  <h1>Discover Great Places</h1>
                </div>
                {/* <!--Hero form --> */}
                <form action="#" class="search-box">
                  <div class="input-form">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div class="select-form">
                    <div class="select-itms">
                      <select name="select" id="select1">
                        <option value="">All Catagories</option>
                        <option value="">Catagories One</option>
                        <option value="">Catagories Two</option>
                        <option value="">Catagories Three</option>
                        <option value="">Catagories Four</option>
                      </select>
                    </div>
                  </div>
                  <div class="search-form">
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
