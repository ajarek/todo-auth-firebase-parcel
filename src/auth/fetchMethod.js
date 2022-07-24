export const fetchMethod = async (method, url, data) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const options = {
    method,
    headers,
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
