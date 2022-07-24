export const formatPriceVnd = (price) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    price
  );

/* Implementation of lodash.get function */
export const getProp = (object, keys, defaultVal) => {
  keys = Array.isArray(keys) ? keys : keys.split(".");
  object = object[keys[0]];
  if (object && keys.length > 1) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return getProp(object, keys.slice(1));
  }
  return object === undefined ? defaultVal : object;
};
