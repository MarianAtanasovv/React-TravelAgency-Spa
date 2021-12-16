import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as countriesService from "../../services/countriesService";
import LocationsCard from "../Locations/LocationsCard";
import "./locations.css";

const Locations = () => {
  const [search, setSearch] = useState(``);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    countriesService.getAllLocations().then((result) => {
      setLocations(result);
    });
  }, []);


  
  return (
    <div className="listing-area pt-120 pb-120">
      <div className="container">
        <div className="searchingBar">
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
        <div className="row">
          <div className="listing-details-area">
            <div className="container">
              <div className="row">
                {locations
                  .filter((value) => {
                    if (search == "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((location) => (
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
