import axios from "axios";

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1",
});

api.interceptors.request.use(async (config) => {
  config.params = {
    ts: process.env.TS,
    apikey: process.env.APIKEY,
    hash: process.env.HASH,
  };

  return config;
});
export default api;
