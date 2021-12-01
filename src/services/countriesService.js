const baseUrl = "http://localhost:3030/jsonstore";

export const getAllCountries = async () => {
  let response = await fetch(`${baseUrl}/travel-agency/countries/countries`);

  let countries = await response.json();
  let result = Object.values(countries);

  return result;
};
export const getOne = (locationName, locationId) => {
  return fetch(
    `${baseUrl}/travel-agency/countries/${locationName}/${locationId}`
  ).then((res) => res.json());
};

export const getAllLocations = async (country) => {
  let response = await fetch(`${baseUrl}/travel-agency/countries/${country}`);

  let locations = await response.json();

  let result = Object.values(locations);
  return result;
};

export const createCountry = async (countriesData) => {
  let response = await fetch(`${baseUrl}/travel-agency/countries`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(countriesData),
  });

  let result = await response.json();

  return result;
};

export const createLocation = async (locationData) => {
  let response = await fetch(
    `${baseUrl}/travel-agency/countries/${locationData.country}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(locationData),
    }
  );

  let result = await response.json();

  return result;
};
