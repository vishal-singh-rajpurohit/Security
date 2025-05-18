import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchProductsError,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchSelectedProductStart,
} from "../App/functions/product.slice";
import { logingUser } from "../App/functions/auth.slice";
import { loading, loaded } from "../App/functions/variable.slice";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.variable.page);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [successText, setSuccessText] = useState("Order placed successfully");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setFail(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  // Navigation menu state
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    checkAlreadyLoggedIn();
    fetchProductFirst();
  }, []);

  // Methods
  async function checkAlreadyLoggedIn() {
    dispatch(loading());
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v2/user/check-already-loggedin`,
        {},
        {
          withCredentials: true,
        }
      );

      if (response) {
        dispatch(logingUser({ user: response.data.data.User }));
      }
    } catch (error) {
      console.log("Error while checking login status ");
    } finally {
      dispatch(loaded());
    }
  }

  async function fetchProductFirst() {
    dispatch(fetchProductsStart());
    dispatch(loading());
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v2/main/serve/initail-serve`
      );

      dispatch(fetchProductsSuccess(response.data.data));
    } catch (error) {
      dispatch(fetchProductsError());
    } finally {
      dispatch(loaded());
    }
  }

  async function fetchProductWill() {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/main/product/will-server/?page=${pageNo}`
      );

      console.log("Products Served: ", response);
      dispatch(fetchProductsSuccess());
    } catch (error) {
      console.log("Error while serving products ", error);
      dispatch(fetchProductsError());
    }
  }

  const Methods = {
    fetchProductWill,
  };

  const data = {
    dispatch,
    openMenu,
    setOpenMenu,
    Methods,
    success,
    setSuccess,
    successText,
    setSuccessText,
    fail,
    setFail,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
