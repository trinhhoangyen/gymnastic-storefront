import axios from "~/plugins/axios.ts";

const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data.result;
};

const getProductDetail = async (slug) => {
  const res = await axios.get(`/api/products/${slug}`);
  return res;
};

export default {
  getProducts,
  getProductDetail
};
