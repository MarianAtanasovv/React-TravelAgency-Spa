import { useEffect, useState } from "react";
import LocationsCard from "./LocationsCard";
import * as PetService from "../services/locationsService";

const Locations = () => {
  const [locations, setPets] = useState([]);
  useEffect(() => {
    PetService.getAllLocations().then((result) => {
      console.log(result);
      setPets(result);
    });
  }, []);

  return (
    <div class="popular-location section-padding30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-tittle text-center mb-80">
              <span>Most visited places</span>
              <h2>Popular Locations</h2>
            </div>
          </div>
        </div>
        {/* locationsCardsStart */}

        {locations.map((location) => (
          <LocationsCard key={location._id} location={location} />
        ))}

        <div class="row justify-content-center">
          <div class="room-btn pt-20">
            <a href="catagori.html" class="btn view-btn1">
              View All Places
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
