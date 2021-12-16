import * as request from "./requester";
const baseUrl = "http://localhost:3030/data";

export const like = (userId, locationId) =>
  request.post(`${baseUrl}/likes`, { userId, locationId });

export const getLocationsLikes = (locationId) =>
  request.get(`${baseUrl}/likes?locationId=${locationId}`);
