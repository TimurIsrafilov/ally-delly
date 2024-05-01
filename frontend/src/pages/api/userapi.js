// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const BASE_URL = "http://localhost:3001";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/users/${email}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001",
    },
    body: JSON.stringify({ email, password }),
  }).then(getResponse);
};
