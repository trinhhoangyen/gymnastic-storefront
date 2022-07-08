import axios from "~/plugins/axios.ts";

const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data.result;
};

const getImage = async (filename) => {
  const res = await axios.get("/api/storages/" + filename);
  return res.config.baseURL + res.config.url;
};

export default {
  getProducts,
  getImage,
};
