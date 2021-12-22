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

export const destroy = (commentId, token) => {
  return fetch(`${baseUrl}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};

export const getOne = (commentId, token) => {
  return fetch(`${baseUrl}/comments/${commentId}`).then((res) => res.json());
};

export const edit = (commentData, commentId, token) => {
  return fetch(`${baseUrl}/comments/${commentId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(commentData),
  }).then((res) => res.json());
};
