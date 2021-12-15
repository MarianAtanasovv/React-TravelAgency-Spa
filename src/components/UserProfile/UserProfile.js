import FavouritedLocations from "./FavouritedLocations";
import { useState, useEffect, useContext } from "react";
import * as profileService from "../../services/profileService";
import { AuthContext } from "../../contexts/authContext";
import "./userProfile.css";
import ConfirmDialog from "../common/ConfirmDialog";
import { Link } from "react-router-dom";
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
