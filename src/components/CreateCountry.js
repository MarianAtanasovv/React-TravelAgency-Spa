import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import * as countriesService from "../services/countriesService";

const Create = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: value,
    };
  });

  const onCountryCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let img = formData.get("img");
    let country = formData.get("country");

    countriesService
      .createCountry({
        img,
        country,
      })
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <div className="form-body-create">
      <form action="post" onSubmit={onCountryCreate} class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
          <h1>Add a location</h1>
          <input type="text" name="img" placeholder="Image" />

          <Select
            name="country"
            style={{ width: "150px" }}
            value={selectedCountry}
            onChange={(e) => selectCountryHandler(e.target.value)}
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
          </Select>

          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Create;
