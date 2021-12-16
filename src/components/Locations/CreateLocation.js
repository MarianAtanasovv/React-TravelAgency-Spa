import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import * as countriesService from "../../services/countriesService";
import { useContext } from "react";
import * as profileService from "../../services/profileService";
import { AuthContext } from "../../contexts/authContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";

const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
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
  // TODO: AcessToken!!!!!!

  const onLocationCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let img = formData.get("img");
    let country = formData.get("country");
    let description = formData.get("description");
    let exactAddress = formData.get("exactAddress");
    let name = formData.get("name");

    countriesService
      .createLocation(
        {
          name,
          img,
          description,
          country,
          exactAddress,
        },
        user.accessToken
      )
      .then((result) => {
        navigate("/locations");
        addNotification("You successfully added a location", types.success);
      });
   
    // profileService.getAllLocations().then(() => {
    //   addNotification("Location added to favourites", types.success);
    // });
  };

  return (
    <div className="form-body-create">
      <form action="post" onSubmit={onLocationCreate} className="decor">
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <h1>Add a location</h1>
          <input
            type="text"
            name="name"
            placeholder="Alexander Nevsky Cathedral"
          />
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
          <textarea
            type="text"
            className="description"
            name="description"
            placeholder="This place is perfect for..."
          />
          <textarea
            type="text"
            className="exact-address"
            name="exactAddress"
            placeholder="Peter Dimkov Street..."
          />

          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Create;
