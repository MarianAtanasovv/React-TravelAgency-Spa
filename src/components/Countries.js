import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import * as countriesService from "../services/countriesService";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAllCountries().then((result) => {
      setCountries(result);
    });
  }, []);

  return (
    <div className="popular-location section-padding30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-80">
              <span>Most visited places</span>
              <h2>Popular Locations</h2>
            </div>
          </div>
        </div>

        {countries.map((country) => (
          <CountriesCard key={country._id} country={country} />
        ))}

        <div className="row justify-content-center">
          <div className="room-btn pt-20">
            <a href="catagori.html" className="btn view-btn1">
              View All Places
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Countries;
