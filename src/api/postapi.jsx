import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,cca3,population,region,capital,flags");
};

export const getCountryByCode = (code) => {
  return api.get(`/alpha/${code}`);
};
