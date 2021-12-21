import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <ul>
                    <Link to={"/about-us"}>
                      <li>
                        <a>About us</a>
                      </li>
                    </Link>
                    <h4>Contact us at: </h4>

                    <p> Adress:117 Jockey Hollow Drive Herndon, VA 20170 </p>

                    <p> Phone: 909-767-9838</p>

                    <p> Email: travelingExp@gmail.com</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
