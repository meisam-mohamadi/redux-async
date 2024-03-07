// export const getProductData = async () => {
//   const response = await fetch("http://localhost:9090/products");
//   const data = await response.json();
//   return { type: "GET_PRODUCT_DATA", payload: data };
// };

export const getProductData = () => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9090/products");
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_DATA", payload: data });
  };
};
