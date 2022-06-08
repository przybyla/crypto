import axios from "axios";

const defaultOptions = {
  baseURL: "https://api.coingecko.com/api/v3/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: "Client-ID 4goJiw0VZwt6LbJp7dofYs2x-xXtl3EhOdAl1lCjA8g",
  },
};

const Fetch = axios.create(defaultOptions);

export default Fetch;
