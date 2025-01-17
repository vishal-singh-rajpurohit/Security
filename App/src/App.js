import React from "react";
import "./css/Styles.css";
import "./Components/LoginSignup/signup.css"
import Layout from './Layout'
import Products from './Components/Products/Products'
import Shop from "./Components/Products/Shop/Shop";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import Profile from "./Components/Profile/Profile";
import CustomProduct from "./Components/CustomProduct/CustomProduct";
import ShopDetails from "./Components/Products/ShopDetails/ShopDetails";
import Cart from "./Components/Products/Cart/Cart";
import Otp from "./Components/Otp/Otp";


import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from "react-router-dom";
import OtpLogin from "./Components/Otp/OtpLogin";
import AuthProvider from "./context/AuthProvider.provider";




const App = () => {


  return (
    <>
      <AuthProvider >
        {/* <Router> */}
          <Routes >
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Products />} />
              <Route path="shop/cart" element={<Cart />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/details" element={<ShopDetails />} />
              <Route path="custom/customize" element={<CustomProduct />} />
              <Route path="user/profile" element={<Profile />} />
              <Route path="user/register" element={<Signup />} />
              <Route path="user/login" element={<Login />} />
              <Route path="/verify/otp" element={<Otp />} />
              <Route path="/verify/login-otp" element={<OtpLogin />} />
            </Route>
          </Routes>
        {/* </Router> */}
      </AuthProvider>

      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default App;
