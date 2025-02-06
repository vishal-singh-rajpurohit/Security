import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../context/AuthContext.context';
import tempCam from '../../../Assets/x.jpg'
import { MdAddShoppingCart, MdCurrencyRupee } from 'react-icons/md';

const Orders = () => {

    const { addToCart, selectProduct, getOrders, orders } = useContext(AuthContext);

    useEffect(() => {
        getOrders();
    }, []);


    return (
        <section class="product-main-">
            <div class="product-premium-text">
                <h3 class="premium">Orders</h3>
            </div>
            <div class="prodcut-grid-">
                {
                    orders && orders.map((product) => (
                        <div class="premium-card2">
                            <div class="premium-card-disp" onClick={() => selectProduct(product._id)}>
                                <img src={tempCam} alt="" class="--premium-image" />
                            </div>
                            <div class="premium-card-details">
                                <div class="--premium-det-title" style={{ cursor: 'pointer' }} onClick={() => selectProduct(product._id)}>
                                    <p class="--premium-p">
                                        {product.ProductName}
                                    </p>
                                </div>
                                <div class="--premium-det-rating" onClick={() => selectProduct(product._id)}>* 4.5 (15 reviews)</div>
                                <div class="--premium-cart-price">
                                    <div class="--premium-price"><MdCurrencyRupee size={10} /> {product.PriceForCustomers}</div>
                                    <div class="--premium-cart" onClick={() => addToCart(product._id)}><MdAddShoppingCart /></div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Orders