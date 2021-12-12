import * as request from "./requester";
const baseUrl = "http://localhost:3030/data";

export const like = (userId, locationId) =>
  request.post(`${baseUrl}/likes`, { userId, locationId });

export const getLocationsLikes = (locationId) => {
  const query = encodeURIComponent(`locationId="${locationId}"`);

  return request
    .get(`${baseUrl}/likes?select=userId&where=${query}`)
    .then((res) => res.map((x) => x.userId));
};
