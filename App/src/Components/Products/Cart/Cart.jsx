import React, { useContext, useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext.context";
import tempSlide from '../../../Assets/logo/logo.png'
import tempimg from '../../../Assets/camera/singledome.png'
import '../../../Styles/cart.css'

const Cart = () => {

    const { serveCart, selectProduct, removeFromCart } = useContext(AuthContext);
    const { cartProducts, tempUserType, userType, totalAmmount } = useContext(AuthContext);


    useEffect(() => {
        serveCart();
    }, [])


    return (
        <>
            <section class="slide-box">
                <div class="--slide">
                    <div class="left--slide">
                        <div class="left--slide-up">
                            <h2 class="slide-det-text">Loremasfsd ipsumadfdsa dolorasfdsa</h2>
                        </div>
                        <div class="left--slide-mid">
                            <p class="slide-det-para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
                                iste nisi officia delectus!
                            </p>
                        </div>
                        <div class="left--slide-down">
                            <button class="btn-lite">Buy Now</button>
                            <button class="btn-dark">Explore More</button>
                        </div>
                    </div>
                    <div class="right--slide">
                        <img
                            src={tempSlide}
                            alt="Dome cctv camera"
                            class="slide--image"
                        />
                    </div>
                </div>
            </section>
            <section class="cart-main-">
                <div class="cart-grid-">
                    <div class="premium-card2">
                        <div class="premium-card-disp">
                            <img src={tempimg} alt="" class="--premium-image" />
                        </div>
                        <div class="premium-card-details">
                            <div class="--premium-det-title">
                                <p class="--premium-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                    sequi consectetur asperiores eveniet a corrupti.
                                </p>
                            </div>
                            <div class="--premium-det-rating">* 4.5 (15 reviews)</div>
                            <div class="--premium-cart-price">
                                <div class="--premium-price">$ 250</div>
                            </div>
                        </div>
                    </div>
                    <div class="premium-card2">
                        <div class="premium-card-disp">
                            <img src={tempimg} alt="" class="--premium-image" />
                        </div>
                        <div class="premium-card-details">
                            <div class="--premium-det-title">
                                <p class="--premium-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                    sequi consectetur asperiores eveniet a corrupti.
                                </p>
                            </div>
                            <div class="--premium-det-rating">* 4.5 (15 reviews)</div>
                            <div class="--premium-cart-price">
                                <div class="--premium-price">$ 250</div>
                                <div class="--premium-cart">cart</div>
                            </div>
                        </div>
                    </div>
                    <div class="premium-card2">
                        <div class="premium-card-disp">
                            <img src={tempimg} alt="" class="--premium-image" />
                        </div>
                        <div class="premium-card-details">
                            <div class="--premium-det-title">
                                <p class="--premium-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                    sequi consectetur asperiores eveniet a corrupti.
                                </p>
                            </div>
                            <div class="--premium-det-rating">* 4.5 (15 reviews)</div>
                            <div class="--premium-cart-price">
                                <div class="--premium-price">$ 250</div>
                                <div class="--premium-cart">cart</div>
                            </div>
                        </div>
                    </div>
                    <div class="premium-card2">
                        <div class="premium-card-disp">
                            <img src={tempimg} alt="" class="--premium-image" />
                        </div>
                        <div class="premium-card-details">
                            <div class="--premium-det-title">
                                <p class="--premium-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                    sequi consectetur asperiores eveniet a corrupti.
                                </p>
                            </div>
                            <div class="--premium-det-rating">* 4.5 (15 reviews)</div>
                            <div class="--premium-cart-price">
                                <div class="--premium-price">$ 250</div>
                                <div class="--premium-cart">cart</div>
                            </div>
                        </div>
                    </div>
                    <div class="premium-card2">
                        <div class="premium-card-disp">
                            <img src={tempimg} alt="" class="--premium-image" />
                        </div>
                        <div class="premium-card-details">
                            <div class="--premium-det-title">
                                <p class="--premium-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                    sequi consectetur asperiores eveniet a corrupti.
                                </p>
                            </div>
                            <div class="--premium-det-rating">* 4.5 (15 reviews)</div>
                            <div class="--premium-cart-price">
                                <div class="--premium-price">$ 250</div>
                                <div class="--premium-cart">cart</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-whole">
                    <div class="cart-whole-cart">
                        <div class="main-cart-price">
                            <div class="main-cart-price-grid">
                                <span class="price-key">items: </span>
                                <span class="price-value">
                                    2
                                </span>
                            </div>
                            <div class="main-cart-price-grid">
                                <span class="price-key">total price: </span>
                                <span class="price-value">
                                    $50.9
                                </span>
                            </div>
                            <div class="main-cart-price-grid">
                                <span class="price-key">you are saving: </span>
                                <span class="price-value">
                                    $5
                                </span>
                            </div>
                        </div>
                        <div class="main-cart-purchase">
                            <button class="btn-full button-shop-dark">Buy Now</button>
                            <button class="btn-full button-shop-lite ">Clear Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
