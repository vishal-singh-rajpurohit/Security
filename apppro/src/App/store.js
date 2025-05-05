import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./functions/auth.slice";
import productReducer from "./functions/product.slice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
