import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./products";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

export default store;
