const HomePage = () => {
  return (
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
                  <input type="text" placeholder="What are you looking for?" />
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
  );
};

export default HomePage;
