import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://gymnastic-dev.azurewebsites.net",
});

export default instanceAxios;
