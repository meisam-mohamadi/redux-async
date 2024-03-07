const INITIAL_STATE = [];
const ProductReducer = (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return action.payload;
    default:
      return state;
  }
}

export default ProductReducer;
