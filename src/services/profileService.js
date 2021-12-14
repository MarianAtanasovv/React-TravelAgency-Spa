import * as request from "./requester";
const baseUrl = "http://localhost:3030/data";

export const addLocationToUser = async (location, token) => {
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
export const getAll = () => request.get(`${baseUrl}/favourites`);

export const destroy = (locationId, token) => {
  return fetch(`${baseUrl}/favourites/${locationId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
