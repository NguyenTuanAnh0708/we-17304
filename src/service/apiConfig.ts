import axios from "axios";

export const https = axios.create({
  //   baseURL: process.env.Geolocation,
});
export const httpsGeolocation = axios.create({
  baseURL: process.env.Geolocation,
});
