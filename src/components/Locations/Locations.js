import { useEffect, useState } from "react";
import * as countriesService from "../../services/locationService";
import LocationsCard from "../Locations/LocationsCard";
import "./locations.css";
import { Link } from "react-router-dom";

const Locations = () => {
  const [search, setSearch] = useState(``);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    countriesService.getAllLocations().then((result) => {
      setLocations(result);
    });
  }, []);

  const readyToShow = () => {
    return (
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
    );
  };

  const nothingToShow = () => {
    return (
      <div className="box-wrapper">
        <div className="box">
          <h1> There are currently no locations!</h1>
          <button className="locations-ref">
            <Link to={"/create-location"}>Create</Link>
          </button>
        </div>
      </div>
    );
  };
  let checkLength = false;
  if (locations.length > 0) {
    checkLength = true;
    readyToShow();
  } else {
    checkLength = false;
    nothingToShow();
  }
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
        {checkLength ? readyToShow() : nothingToShow()}
      </div>
    </div>
  );
};
export default Locations;
