import { Link } from "react-router-dom";
const LocationsCard = ({ location }) => {
  return (
    <div className="col-lg-6 ">
      <div className="single-listing mb-30">
        <div className="list-img">
          <img src={location.img} alt="" />
        </div>
        <div className="list-caption">
          <h3>
            <Link className="button" to={`/details/${location._id}`}>
              {location.name}
            </Link>
          </h3>
          <p>{location.description}...</p>
        </div>
      </div>
    </div>
  );
};
export default LocationsCard;
