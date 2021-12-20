import { Link } from "react-router-dom";
const FavouritedLocations = () => {
  return (
    <div className="locationCard col-lg-6 ">
      <div className="single-listing mb-30">
        <div className="list-img">
          <img
            src="http://www.simpleimageresizer.com/_uploads/photos/b2fc7b42/pexels-photo-2486168_400x300.jpeg"
            alt=""
          />
        </div>
        <div className="list-caption">
          <h3>
            <Link className="button" to={"/user-profile/favourite-locations"}>
              Your favourite locations
            </Link>
          </h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default FavouritedLocations;
