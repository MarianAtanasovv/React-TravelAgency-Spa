import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as countriesService from "../services/countriesService";
import LocationsCard from "./LocationsCard";

const Locations = () => {
  const { country } = useParams();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    countriesService.getAllLocations(country).then((result) => {
      setLocations(result);
    });
  }, []);
  

  return (
    <div className="listing-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="listing-details-area">
            <div className="container">
              <div className="row">
                {locations.map((location) => (
                  <LocationsCard key={location._id} location={location} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
