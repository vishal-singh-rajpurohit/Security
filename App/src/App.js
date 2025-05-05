import React from "react";
import Layout from "./Layout";
import Products from "./Components/Products/Products";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.provider";

// stylling
import "./Styles/bg.css";
import "./Styles/buttons.css";
import "./Styles/normal.css";
import "./Styles/profile.css";
import "./Styles/res.css";
import "./Styles/styles.css";
import "./Styles/shop.css";
import Premium from "./Components/Products/Premium";
import About from "./Components/About/About";
import Terms from "./Components/Terms/Terms";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import ResatPassword from "./Components/Auth/ResatPassword";
import VerifyPage from "./Components/Auth/VerifyPage";
import Shop from "./Components/NEW/Shop";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Products />} />
              {/* Identity */}
              <Route path="about" element={<About />} />
              <Route path="premium" element={<Premium />} />
              <Route path="terms" element={<Terms />} />
              {/* Auth */}
              <Route path="auth/login" element={Login} />
              <Route path="auth/signup" element={Signup} />
              <Route path="auth/resat-password" element={ResatPassword} />
              <Route path="auth/verify-identity" element={VerifyPage} />
              {/* Shop */}
              <Route path="shop/purchase" element={Shop} />
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </>
  );
};

export default App;
