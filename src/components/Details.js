import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as countriesService from "../services/countriesService";
import { AuthContext } from "../contexts/authContext";

const Details = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});
  const { user } = useContext(AuthContext);
  const { locationName, locationId } = useParams();

  useEffect(() => {
    countriesService.getOne(locationId).then((locationResult) => {
      setLocation(locationResult);
    });
  }, [locationId]);

  const deleteHandler = (e) => {
    e.preventDefault();

    countriesService.destroy(locationId, user.accessToken).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div class="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap text-center pt-50">
                <h2>{location.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="details-location-img" src={location.img}></img>
      </div>

      <div class="listing-caption section-padding2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h3 class="mb-20">Description</h3>
              <p class="mb-30">{location.description}</p>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h3 class="mb-30">Location</h3>
              <p class="mb-30">{location.exactAddress}</p>
              <button class="delete-btn" onClick={deleteHandler}>
                <i class="fa fa-trash"></i>
              </button>
              <div class="d-none d-sm-block mb-30 pb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
