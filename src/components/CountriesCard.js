import { Link } from "react-router-dom";
const CountriesCard = ({ country }) => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-location mb-30">
          <div className="location-img">
            <img src={country.img} alt="" />
          </div>
          <div className="location-details">
            <p>{country.name}</p>
            <Link className="button" to={`/locations?country=${country.name}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
