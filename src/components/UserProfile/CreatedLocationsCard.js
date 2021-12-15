import { Link } from "react-router-dom";
const CreatedLocationsCard = () => {
  return (
    <div className="locationCard col-lg-6 ">
      <div className="single-listing mb-30">
        <div className="list-img">
          <img
            src="https://i2.wp.com/lilioftheworld.com/wp-content/uploads/2021/02/Panorama-Night-view.jpg?resize=960%2C720&ssl=1 "
            alt=""
          />
        </div>
        <div className="list-caption">
          <h3>
            <Link className="button" to={"/user-profile/created-locations"}>
              Your created locations
            </Link>
          </h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default CreatedLocationsCard;
