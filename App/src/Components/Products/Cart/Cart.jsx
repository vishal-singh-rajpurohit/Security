import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { BiRupee } from "react-icons/bi";
import a from "../../../Assets/Cameras/v.webp"
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext.context";

const Cart = () => {

    const { serveCart, selectProduct, removeFromCart } = useContext(AuthContext);
    const { cartProducts, tempUserType, userType } = useContext(AuthContext);

    useEffect(async () => {
        await serveCart();
    }, [])

    return (
        <main className="cart-page">
            <div className="page-heding">
                <h1 className="card-text">Cart</h1>
            </div>
            <section className="cart-section">
                <div className="right-cart-page">
                    <div className="list-style-products-display">
                        {
                            cartProducts? (
                            cartProducts?.map((product)=><div className="box1 box-card1" id="b1">
                            <div className="image-of-product">
                                <span className="image">
                                    <img src={product.Product.FrontImage} alt="" className="box-1-product-image" />
                                </span>
                            </div>
                            <div className="description">
                                <div className="product-description">
                                    <div className="for-overflow">
                                        <h2 className="product-name">
                                           {
                                            product.Product.ProductName
                                           }
                                        </h2>
                                    </div>
                                    <div className="total-orders">
                                        <span className="last-orders">
                                            total 1500 orders last month
                                        </span>
                                    </div>
                                    <div className="price">
                                        <span className="price">
                                            <span className="rupee">
                                                {" "}
                                                <span className="symbol-rupee">&#x20b9;</span>
                                                <span className="pri">{product.Product.Price}</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="save-button">
                                        <button className="btn-order save-button remove-button" onClick={()=>removeFromCart(product._id)}>
                                            <MdDeleteForever /> ramove from cart
                                        </button>
                                    </div>
                                    <div className="button">
                                        <button className="btn-order" onClick={() => selectProduct(product._id, (userType ||tempUserType))}>Know More</button>
                                        <button className="btn-order">Book Installation</button>
                                    </div>
                                </div>
                            </div>
                        </div>)) : null
                        }
                       
                    </div>
                </div>
                <div className="left-cart-page">
                    <div className="cart-details-top">
                        <div className="coupon-text">
                            <p className="c-t">Enter Coupon Code</p>
                        </div>
                        <div className="coupon-box">
                            <input type="text" name="" id="coupon" placeholder="Enter Coupon Code" />
                            <button className="coupon-button">Apply</button>
                        </div>
                    </div>
                    <div className="cart-details-main">
                        <div className="cart-main-top">
                            <p className="total-ammount-saving">
                                <BiRupee />{4455} Total Ammount
                            </p>
                            <p className="total-ammount-saving">
                                <BiRupee />{4455} Total Savings
                            </p>
                        </div>
                        <div className="cart-main-shop-now">
                            <button className="shop-now-btn">Order Now</button>
                        </div>
                        <div className="continue-shoping">
                            <NavLink className="continue-shoping-btn" to={""}>
                                <button className="continue-shoping-btn">Continue Shoping</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
