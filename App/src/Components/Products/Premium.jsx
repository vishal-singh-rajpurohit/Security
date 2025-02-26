import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext.context';
import { MdAddShoppingCart, MdCancel, MdCurrencyRupee } from 'react-icons/md';
import '../../Styles/p.css'


const Premium = () => {

    const { addToCart, proProducts, selectProduct, userType, tempUserType, getOrders, orders, cancleOrder, servePremium } = useContext(AuthContext);

    useEffect(() => {
        servePremium(userType || tempUserType, 15);
    }, []);


    return (
        <section class="product-main-">
            <div class="product-premium-text">
                <h3 class="premium">Premium</h3>
            </div>
            <div class="prodcut-grid-">
                {
                    proProducts && proProducts.map((prodcut) => (
                        <div class="premium-card" key={prodcut._id}>
                            <div class="premium-card-disp" onClick={() => selectProduct(prodcut._id)}>
                                <img
                                    src={prodcut.FrontImage}
                                    alt=""
                                    class="--premium-image"
                                />
                            </div>
                            <div class="premium-card-details">
                                <div class="--premium-det-title">
                                    <p class="--premium-p" style={{ cursor: 'pointer' }} onClick={() => selectProduct(prodcut._id)}>
                                        {prodcut.ProductName}
                                    </p>
                                </div>
                                <div class="--premium-det-rating" onClick={() => selectProduct(prodcut._id)}>* 4.5 (15 reviews)</div>
                                <div class="--premium-cart-price">
                                    <div class="--premium-price">$ 250</div>
                                    <div class="--premium-cart" onClick={() => addToCart(prodcut._id)}><MdAddShoppingCart /></div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Premium