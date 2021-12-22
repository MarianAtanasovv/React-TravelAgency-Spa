import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import * as countriesService from "../../services/locationService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import useLocationState from "../../hooks/useLocationState";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";

const EditLocation = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const { locationId } = useParams();
  const [location, setLocation] = useLocationState(locationId);
  const { addNotification } = useNotificationContext();

  const locationEditSubmitHandler = (e) => {
    e.preventDefault();

    let locationData = Object.fromEntries(new FormData(e.currentTarget));

    countriesService
      .edit(location._id, locationData)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });

    addNotification("You successfully edited a location", types.success);
    navigate("/locations");
  };

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

  return (
    <div className="form-body-create">
      <form
        action="post"
        className="decor"
        onSubmit={locationEditSubmitHandler}
      >
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <h1>Add a location</h1>
          <input
            type="text"
            name="name"
            placeholder="Alexander Nevsky Cathedral"
            defaultValue={location.name}
          />
          <input
            type="text"
            name="img"
            placeholder="Image"
            defaultValue={location.img}
          />

          <Select
            name="country"
            style={{ width: "150px" }}
            value={selectedCountry}
            onChange={(e) => selectCountryHandler(e.target.value)}
            defaultValue={location.country}
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
            defaultValue={location.description}
          />
          <textarea
            type="text"
            className="exact-address"
            name="exactAddress"
            placeholder="Peter Dimkov Street..."
            defaultValue={location.exactAddress}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
      /
    </div>
  );
};
export default EditLocation;
