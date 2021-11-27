const baseUrl = "http://localhost:3030/jsonstore";

export const getAllCountries = async () => {
  let response = await fetch(`${baseUrl}/travel-agency/countries`);

  let countries = await response.json();
  let result = Object.values(countries);

  return result;
};

export const getAllLocations = async () => {
  let response = await fetch(`${baseUrl}/travel-agency/locations`);
  let locations = await response.json();

  let result = Object.values(locations);

  return result;
};

export const create = async (countriesData) => {
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
