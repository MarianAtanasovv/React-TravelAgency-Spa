import "./userProfile.css";
import CreatedLocationsCard from "./CreatedLocationsCard";
import FavouritedLocationsCard from "./FavouritedLocationsCard";

const UserProfile = () => {
  return (
    <div className="row">
      <div className="listing-details-area">
        <div className="container">
          <div className="fav row">
            <FavouritedLocationsCard></FavouritedLocationsCard>
            <CreatedLocationsCard></CreatedLocationsCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
