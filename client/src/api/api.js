const BASE_URL = "http://localhost:8000";

export const getParkData = async () => {
  const res = await fetch(`${BASE_URL}/api/park/parkData`, {
    method: "GET",
  });
  const json = await res.json();
  return json[0].parkData;
};

export const setParkData = async (parkData) => {
  const res = await fetch(`${BASE_URL}/api/park/parkData`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parkData,
    }),
  });

  const json = await res.json();
  return json;
};
