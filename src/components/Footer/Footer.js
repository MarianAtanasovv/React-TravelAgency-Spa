import { Link } from "react-router-dom";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./footer.css";

const Footer = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "4e60673780b284301f274c6fa0096492",
    lat: "42.432997",
    lon: "25.285989",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
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
                      <li>About us</li>
                    </Link>
                    <h4>Contact us at: </h4>

                    <p> Adress:117 Jockey Hollow Drive Herndon, VA 20170 </p>

                    <p> Phone: 909-767-9838</p>

                    <p> Email: travelingExp@gmail.com</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="forecast">
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Bulgaria"
                unitsLabels={{
                  temperature: "C",
                  windSpeed: "Km/h",
                }}
                showForecast
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
