const baseUrl = "http://localhost:3030/jsonstore";

export const getAllLocations = async () => {
  let response = await fetch(`${baseUrl}/travel-agency/locations`);

  let locations = await response.json();
  let result = Object.values(locations);

  return result;
};
export const create = async (locationsData) => {
  let response = await fetch(`${baseUrl}/travel-agency/locations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(locationsData),
  });

  let result = await response.json();

  return result;
};
