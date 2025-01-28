import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext.context';

const Order = () => {
    const { products, userType , tempUserType, orders } = useContext(AuthContext);
    const { selectProduct } = useContext(AuthContext);
    
    return (
        <main className="product-main">
            <section className="product-box">

                <div className="product-container">
                    <div className="list-style-products-display">
                        {
                            orders?.map((product, index) => <div className="box1" id="b1" style={{height: "23vh"}} key={product._id}>
                                <div className="image-of-product">
                                    <span className="image" >
                                        <img src={product.Product.FrontImage} alt="" className="box-1-product-image" />
                                    </span>
                                </div>
                                <div className="description">
                                    <div className="product-description">
                                        <div className="for-overflow">
                                            <h2 className="product-name">{product.ProductName}</h2>
                                        </div>
                                        <div className="total-orders">
                                            <span className="last-orders">total 1500 orders last month</span>
                                        </div>
                                        <div className="price">
                                            <span className="price">
                                                <span className="rupee"> <span className="symbol-rupee">&#x20b9;</span><span
                                                    className="pri">
                                                    {
                                                        product.Product.Price
                                                    }
                                                </span></span>
                                            </span>
                                        </div>
                                        <div className="button">
                                            <button className="btn-order" onClick={() => selectProduct(product.Product._id, (userType || tempUserType))} >Know More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Order