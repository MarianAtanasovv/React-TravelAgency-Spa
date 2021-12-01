import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as countriesService from "../services/countriesService";

const Details = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});
  const { locationName, locationId } = useParams();

  useEffect(() => {
    countriesService.getOne(locationName, locationId).then((locationResult) => {
      setLocation(locationResult);
    });
  }, [locationName, locationId]);

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
      <img className="details-location-img" src={location.img}></img>
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
              <div class="d-none d-sm-block mb-30 pb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
