import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./functions/auth.slice";
import productReducer from "./functions/product.slice"
import variableReducer from "./functions/variable.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    variable: variableReducer,
  },
});

export default store;
