import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import * as countriesService from "../../services/countriesService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import { Alert } from "react-bootstrap";
import * as validationHelper from "../common/ValidationHelper";

const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [errors, setErrors] = useState({ name: false });
  const [location, setLocation] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  const timeout = () => {
    setTimeout(() => {
      setErrors((state) => ({
        ...state,
        name: "",
      }));
    }, 4000);
  };

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

  const onLocationCreate = (e) => {
    e.preventDefault();
    let { img, country, description, exactAddress, name } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

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
        const locationId = result._id;

        setLocation(locationId);
        navigate("/locations");
        addNotification("You successfully added a location", types.success);
      });
  };

  const descriptionHandler = (e) => {
    let description = e.target.value;
    if (description.length > validationHelper.descriptionMaxLength) {
      setErrors((state) => ({
        ...state,
        name: `Description should be less than ${validationHelper.descriptionMaxLength} characters long!`,
      }));
      timeout();
      return;
    } else if (description.length < validationHelper.descriptionMinLength) {
      setErrors((state) => ({
        ...state,
        name: `Description can't be less than ${validationHelper.descriptionMinLength} characters long!`,
      }));
      timeout();
      return;
    } else {
      setErrors((state) => ({
        ...state,
        name: false,
      }));
    }
  };
  const nameHandler = (e) => {
    let name = e.target.value;
    if (name.length > validationHelper.nameMaxLength) {
      setErrors((state) => ({
        ...state,
        name: `Name of location should be less than ${validationHelper.nameMaxLength} characters long!`,
      }));
      timeout();
      return;
    } else if (name.length < validationHelper.nameMinLength) {
      setErrors((state) => ({
        ...state,
        name: `Name of location can't be less than ${validationHelper.nameMinLength} characters long!`,
      }));
      timeout();
      return;
    } else {
      setErrors((state) => ({
        ...state,
        name: false,
      }));
    }
  };

  const exactAddressHandler = (e) => {
    let address = e.target.value;

    if (address.length > validationHelper.exactAddressMaxLength) {
      setErrors((state) => ({
        ...state,
        name: `Address should be less than ${validationHelper.exactAddressMaxLength} characters long!`,
      }));
      timeout();
      return;
    } else if (address.length < validationHelper.exactAddressMinLength) {
      setErrors((state) => ({
        ...state,
        name: `Address can't be less than ${validationHelper.exactAddressMinLength} characters long!`,
      }));
      timeout();
      return;
    } else {
      setErrors((state) => ({
        ...state,
        name: false,
      }));
    }
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
            onBlur={nameHandler}
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
            onBlur={descriptionHandler}
          />
          <textarea
            type="text"
            className="exact-address"
            name="exactAddress"
            placeholder="Peter Dimkov Street..."
            onBlur={exactAddressHandler}
          />
          <Alert variant="danger" show={errors.name}>
            {errors.name}
          </Alert>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Create;
