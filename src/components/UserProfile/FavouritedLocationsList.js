import FavouritedLocations from "./FavouritedLocations";
import { useState, useEffect, useContext } from "react";
import * as profileService from "../../services/profileService";
import { AuthContext } from "../../contexts/authContext";
import "./userProfile.css";
import "./favouriteLocations.css";
import { Link } from "react-router-dom";

const FavouritedLocationsList = () => {
  const [locations, setLocation] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    profileService.getAllFavourites().then((locationResult) => {
      setLocation(locationResult);
    });
  }, []);

  const readyToShow = () => {
    return (
      <div className="table100 ver1 m-b-110">
        <div className="table100-head">
          <table>
            <thead>
              <tr className="row100 head">
                <th className="cell100 column1">Image</th>
                <th className="cell100 column2">Name</th>
                <th className="cell100 column3">Description</th>
                <th className="cell100 column4">Country</th>
              </tr>
            </thead>
          </table>
        </div>

        {locations
          .filter((x) => x._ownerId == user._id)
          .map((x) => (
            <FavouritedLocations key={x._id} location={x} />
          ))}
      </div>
    );
  };

  const nothingToShow = () => {
    return (
      <div className="box-wrapper">
        <div className="box">
          <h1> You currently have no favourite locations!</h1>
          <button className="locations-ref">
            <Link to={"/locations"}>Locations</Link>
          </button>
        </div>
      </div>
    );
  };
  let checkFiltered = false;
  const filtered = locations.filter((x) => x._ownerId == user._id);
  if (filtered.length > 0) {
    checkFiltered = true;
    readyToShow();
  } else {
    checkFiltered = false;
    nothingToShow();
  }
  return (
    <div className="limiter">
      <div className="container-table100">
        <div className="wrap-table100">
          {checkFiltered ? readyToShow() : nothingToShow()}
        </div>
      </div>
    </div>
  );
};
export default FavouritedLocationsList;
