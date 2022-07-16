import axios from "~/plugins/axios.ts";

const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data.result;
};

const getSameProducts = async (productCategoryId) => {
  const res = await axios.get(
    `/api/products?ProductCategoryId=${productCategoryId}`
  );
  return res.data.result;
};

const getProductDetail = async (slug) => {
  const res = await axios.get(`/api/products/${slug}`);
  return res;
};

export default {
  getProducts,
  getSameProducts,
  getProductDetail,
};
