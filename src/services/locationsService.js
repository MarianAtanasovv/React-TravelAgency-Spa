const baseUrl = "http://travel-agency-react-softuni.herokuapp.com/jsonstore";

export const getAllLocations = async () => {
  let response = await fetch(`${baseUrl}/locations`);

  let locations = await response.json();

  let result = Object.values(locations);

  return result;
};
