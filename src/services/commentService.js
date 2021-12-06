const baseUrl = "http://localhost:3030/data";

export const create = async (commentData, token) => {
  let response = await fetch(`${baseUrl}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(commentData),
  });
  let result = await response.json();

  return result;
};
export const getAll = async () => {
  let response = await fetch(`${baseUrl}/comments`);

  let comments = await response.json();

  let result = Object.values(comments);

  return result;
};
