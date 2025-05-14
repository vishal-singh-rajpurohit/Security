import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ResatPassword from "./components/Auth/ResatPassword";
import VerifyPage from "./components/Auth/VerifyPage";
import {Auth} from "./middleware/Auth";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Shop from "./components/Pages/Shop";
import Cart from "./components/Pages/Cart";
import Orders from "./components/Pages/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop/shopping" element={<Shop />} />
        <Route path="shop/cart" element={<Auth ><Cart /></Auth>} />
        <Route path="shop/orders" element={<Auth ><Orders /></Auth>} />
        <Route path="user/profile" element={<Auth ><Orders /></Auth>} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResatPassword />} />
        <Route path="verify" element={<VerifyPage />} />
      </Route>
    </Routes>
  );
}


export default App;
