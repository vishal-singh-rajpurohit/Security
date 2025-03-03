import React from "react";
import Layout from './Layout'
import Products from './Components/Products/Products'
import Shop from "./Components/Products/Shop/Shop";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import Profile from "./Components/Profile/Profile";
// import CustomProduct from "./Components/CustomProduct/CustomProduct";
import ShopDetails from "./Components/Products/ShopDetails/ShopDetails";
import Cart from "./Components/Products/Cart/Cart";
import Otp from "./Components/Otp/Otp";
import {Route, Routes } from "react-router-dom";
import OtpLogin from "./Components/Otp/OtpLogin";
import AuthProvider from "./context/AuthProvider.provider";
// import Contact from "./Components/Contact/Contact";
import Orders from "./Components/Profile/Orders/Orders";

// stylling
import './Styles/bg.css'
import './Styles/buttons.css'
import './Styles/normal.css'
import './Styles/offers.css'
import './Styles/premium.css'
import './Styles/profile.css'
import './Styles/res.css'
import './Styles/slides.css'
import './Styles/styles.css'
import './Styles/cart.css'
import './Styles/shop.css'
import Premium from "./Components/Products/Premium";
import About from "./Components/About/About";
import Terms from "./Components/Terms/Terms";




const App = () => {

  return (
    <>
        <AuthProvider >
          <Routes >
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Products />} />
              <Route path="about" element={<About />} />
              <Route path="premium" element={<Premium />} />
              <Route path="terms" element={<Terms />} />
              <Route path="shop/cart" element={<Cart />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/details" element={<ShopDetails />} />
              <Route path="user/profile" element={<Profile />} />
              <Route path="user/Orders" element={<Orders />} />
              <Route path="user/register" element={<Signup />} />
              <Route path="user/login" element={<Login />} />
              <Route path="/verify/otp" element={<Otp />} />
              <Route path="/verify/login-otp" element={<OtpLogin />} />
            </Route>
          </Routes>
        </AuthProvider>
    </>
  );
};

export default App;
