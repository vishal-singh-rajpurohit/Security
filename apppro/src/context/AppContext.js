import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const pageNo = useSelector((state) => state.variable.page);

  // Navigation menu state
  const [openMenu, setOpenMenu] = useState(false);


  useEffect(() => {
    checkAlreadyLoggedIn();
    fetchProductFirst();
  }, []);

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
      const response = await axios.get(`http://localhost:5000/api/v1/main/product/first-server`);

      console.log("Products Served: ", response);
      dispatch(fetchProductsSuccess());
    } catch (error) {
      console.log("Error while serving products ", error);
      dispatch(fetchProductsError());
    }
  }

  async function fetchProductWill() {
    
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/main/product/will-server/?page=${pageNo}`);

      console.log("Products Served: ", response);
      dispatch(fetchProductsSuccess());
    }
    catch (error) {
      console.log("Error while serving products ", error);
      dispatch(fetchProductsError());
    }
  }

  async function selectProduct(product_id) {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/admin/select-product/?id=${product_id}`);
      dispatch(fetchSelectedProductStart());  


      window.localStorage.setItem("selectedProductId", product_id);
      console.log("Selected Product: ", response);

    } catch (error) {
      console.log("Error while selecting product ", error);
      dispatch(fetchProductsError());
    }
  }


  const Methods = {
    fetchProductWill,
    selectProduct
  }

  const data = {
    dispatch,
    openMenu,
    setOpenMenu,
    Methods
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
