import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchProductsError,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchSelectedProductStart,
} from "../App/functions/product.slice";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();

  // Navigation menu state
  const [openMenu, setOpenMenu] = useState(false);

  // Methods
  async function checkAlreadyLoggedIn() {
    try {
      
    } catch (error) {
      console.log("Error while checking login status ", error);
    }
  }

  async function fetchProductFirst() {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/admin/initail-server`
      );

      console.log("Products Served: ", response);
      dispatch(fetchProductsSuccess());
    } catch (error) {
      console.log("Error while serving products ", error);
      dispatch(fetchProductsError());
    }
  }

  async function selectProduct(product_id) {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/admin/select-product`,
        { product_id }
      );

      console.log("Product Selected: ", response);
      dispatch(fetchSelectedProductStart());  
    } catch (error) {
      console.log("Error while selecting product ", error);
      dispatch(fetchProductsError());
    }
  }

  const data = {
    dispatch,
    openMenu,
    setOpenMenu,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
