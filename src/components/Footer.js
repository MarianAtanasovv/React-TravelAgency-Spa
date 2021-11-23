const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Quick Link</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Listing</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">Reasonable Hotel</a>
                    </li>
                    <li>
                      <a href="#">Popular Restaurant</a>
                    </li>
                    <li>
                      <a href="#">Easy Shopping</a>
                    </li>
                    <li>
                      <a href="#">Night Life</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Download App</h4>
                  <ul>
                    <li className="app-log">
                      <a href="#">
                        <img src="assets/img/gallery/app-logo.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/gallery/app-logo2.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-8">
              <div className="footer-copy-right">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="footer-social f-right">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fas fa-globe"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
