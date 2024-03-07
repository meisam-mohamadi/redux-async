import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductData } from "../redux/ProductActions";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return <div>Products</div>;
};

export default Products;
