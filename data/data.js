import fetch from "node-fetch";


async function fetchData(url) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export const vehiclesData = await fetchData(
  "https://ctabustracker.com/bustime/api/v2/getvehicles?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json"
);

export const routesData = await fetchData(
  "http://ctabustracker.com/bustime/api/v2/getroutes?key=ujAhaYu9dy6TAF2VgMLWK5nnV&format=json"
);

export const stopsData = await fetchData(
  "https://ctabustracker.com/bustime/api/v2/getstops?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=7&dir=Eastbound&format=json"
);
export const directionsData = await fetchData(
  "http://ctabustracker.com/bustime/api/v2/getdirections?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json"
);
export const patternsData = await fetchData(
  "https://ctabustracker.com/bustime/api/v2/getpatterns?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&pid=954&format=json"
);
