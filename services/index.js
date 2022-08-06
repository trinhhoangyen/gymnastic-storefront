import axios from "~/plugins/axios.ts";

const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data.result;
};

const getSameProducts = async (productCategoryId) => {
  const res = await axios.get(`/api/products?ProductCategoryId=${productCategoryId}`);
  return res;
};

const getProductDetail = async (slug) => {
  const res = await axios.get(`/api/products/${slug}`);
  return res;
};

const getProductCategories = async () => {
  const res = await axios.get("/api/products/product-categories/");
  return res.data.result;
};

const getComments = async (productId) => {
  const res = await axios.get(`/api/feedbacks?ProductId=${productId}`);
  return res.data.result;
};

export default {
  getProducts,
  getSameProducts,
  getProductDetail,
  getProductCategories,
  getComments,
};
