import * as request from "./requester";
const baseUrl = "http://localhost:3030/data";

export const addLikedLocation = async (location, token) => {
  console.log(location);
  let response = await fetch(`${baseUrl}/favourites`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(location),
  });

  let result = await response.json();

  return result;
};



export const getAllLocations = () => request.get(`${baseUrl}/locations`);

export const getAllFavourites = () => request.get(`${baseUrl}/favourites`);

export const destroyFavourite = (locationId, token) => {
  return fetch(`${baseUrl}/favourites/${locationId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};

export const destroyCreated = (locationId, token) => {
  return fetch(`${baseUrl}/locations/${locationId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
