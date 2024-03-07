import { applyMiddleware, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const Store = createStore(
  ProductReducer,
  applyMiddleware(thunk, logger)
);
