import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {fetchByPageSuccess,fetchProductsError,fetchProductsStart,fetchProductsSuccess} from "../App/functions/product.slice";
import { logingUser } from "../App/functions/auth.slice";
import { loading, loaded } from "../App/functions/variable.slice";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.variable.page);

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [successText, setSuccessText] = useState("Order placed successfully");

  const [orders, setOrders] = useState([
    {
      _id: "",
      status: "",
      createdAt: "",
      product: {
        _id: "",
        ProductName: "",
        DealPrice: 50000,
        FrontImage: "",
      },
    },
  ]);

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
        `${process.env.REACT_APP_API}/user/check-already-loggedin`,
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
        `${process.env.REACT_APP_API}/main/serve/initail-serve`
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
        `${process.env.REACT_APP_API}/main/serve/serve-by-page?page=${pageNo}&limit=2?`
      );

      // dispatch(fetchProductsSuccess());
      dispatch(fetchByPageSuccess(response.data.data.Products));

    } catch (error) {

      console.log("Error while serving products ", error);
      dispatch(fetchProductsError());

    }
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}-${dd}-${yy}`;
  }


  useEffect(()=>{
    fetchProductWill()
  }, [pageNo])

  const Methods = {
    formatDate,
  };

  const data = {
    Methods,
    dispatch,
    openMenu,
    setOpenMenu,
    success,
    setSuccess,
    successText,
    setSuccessText,
    fail,
    setFail,
    orders,
    setOrders,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
