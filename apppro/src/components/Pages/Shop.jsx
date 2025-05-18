import { CiShare2 } from "react-icons/ci";
import "../../Styles/shop.css"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProductsError, fetchProductsStart } from "../../App/functions/product.slice";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { loaded, loading, setScrolled } from "../../App/functions/variable.slice";


const Shop = () => {
    const { dispatch, setSuccess, setSuccessText, setFail } = useContext(AppContext);
    const navigator = useNavigate()

    const [index, setIndex] = useState(0);
    const [last, setLast] = useState(0);
    const [next, setNext] = useState(0);

    useEffect(() => {
        setLast(index - 1);
        setNext(index + 1);
        if (index === 0) setLast(Product.ShowImages.length - 1);
        if (index === Product.ShowImages.length - 1) setNext(0);
    }, [index]);

    async function selectProduct(product_id) {
        dispatch(fetchProductsStart());
        dispatch(loading());
        try {
            const response = await axios.get(
                `http://localhost:5000/api/v2/main/serve/select-product/?id=${product_id}`
            );

            setProduct(response.data.data.ProductData);
            setIndex(0)
            setLast(response.data.data.ProductData.ShowImages.length - 1);
            setNext(1);

        } catch (error) {
            console.log("Error while selecting product ", error);
            dispatch(fetchProductsError());
        } finally {
            dispatch(loaded());
        }
    }

    const [searchParams] = useSearchParams();
    const productId = searchParams.get('pid');

    const [Product, setProduct] = useState({
        _id: "",
        ProductName: "",
        ShowImages: [],
        ProductFeatures: [],
        ProductDescription: "",
        DealPrice: undefined,
        OriginalPrice: undefined,
        ProductRating: undefined,
        ProductReviews: undefined,
        ProductCategory: "",
        SpecialFeature: "",
        cameraMegaPixel: "",
        batteryCapacity: "",
        cameraType: "",
        cameraQuality: "",
        channel: "",
        hdd: ""
    });

    useEffect(() => {
        selectProduct(productId);
    }, []);

    const user = useSelector((state) => state.auth.isLoggedIn);

    async function addToCart() {
        if (!user) {
            navigator("/login");
        } else {
            dispatch(loading());
            try {
                await axios.post(`http://localhost:5000/api/v2/auth/cart/add-to-cart`, { productId }, {
                    withCredentials: true
                });

                setSuccessText("Added to cart successfully");
                setSuccess(true);
            } catch (error) {
                setFail(true)
                setSuccess(true);
                setSuccessText("Now added to cart");
                console.log("Error in adding to cart: ", error);
            } finally {
                dispatch(loaded());
            }
        }
    }

    async function orderNow() {
        if (!user) {
            navigator("/login");
        } else {
            navigator(`/shop/orders/details?pid=${Product._id}`);
        }
    }

    const scrolled = useSelector((state) => state.variable.scrolled);
    useEffect(() => {
        if (!scrolled) {
            dispatch(setScrolled())
        }
    }, [scrolled]);

    return (
        <section className="shop-page">
            <section className="shop-section">
                <div className="shop-section-left">
                    <div className="overview-top-share">
                        <CiShare2 style={{ cursor: "pointer" }} size={20} />
                    </div>
                    <div className="shop-overview-max">
                        <img src={Product.ShowImages[index]} loading="lazy" alt="" className="shop-overview-max-img" />
                    </div>
                    <div className="overview-slide">
                        <div className="left-overview-btn"><BsChevronLeft size={30} cursor={"Pointer"} onClick={() => setIndex(last)} /></div>
                        <div className="overview-slide-overflow">
                            <div className="overview-dl-div">
                                <div className="overview-sm-imge">
                                    <img src={Product.ShowImages[last]} alt="" className="shop-overview-min-img" />
                                </div>
                                <div className="overview-sm-imge">
                                    <img src={Product.ShowImages[index]} alt="" className="shop-overview-min-img" />
                                </div>
                                <div className="overview-sm-imge">
                                    <img src={Product.ShowImages[next]} alt="" className="shop-overview-min-img" />
                                </div>
                            </div>
                        </div>
                        <div className="left-overview-btn"><BsChevronRight size={30} cursor={"Pointer"} onClick={() => setIndex(next)} /></div>
                    </div>
                </div>
                <div className="shop-section-right">
                    <div className="shop-section-right-top-1">
                        <div className="offer-on-shop">Flat {Math.round(((Product.OriginalPrice - Product.DealPrice) / Product.OriginalPrice) * 100)}% off</div>
                    </div>
                    <div className="shop-section-right-mid">
                        <p className="product-title">{Product.ProductName}</p>
                        <div className="rating-div">
                            * <span style={{ fontWeight: "600" }}>5</span> (1 Review)
                        </div>
                        <div className="deal-price">
                            Deal Price <span className="deal-price-ammount"> ₹{Product.DealPrice}</span>
                        </div>
                        <div className="offer-price">
                            Offer Price <span className="offer-price-ammount">₹{Product.OriginalPrice}</span>
                        </div>
                        <div className="mrp-price">
                            MRP <span className="mrp-price-ammount">₹{Product.DealPrice} </span><span className="mrp-txs">(including of all taxes) </span><span className="mrp-off">{Math.round(((Product.OriginalPrice - Product.DealPrice) / Product.OriginalPrice) * 100)}% OFF</span>
                        </div>
                    </div>
                    <div className="more-details">
                        <h3 className="product-details-heading-shop">Product Summary</h3>
                        <ul className="product-detail-ul">
                            {
                                Product.ProductFeatures?.map((feature, index) => (
                                    <li className="product-details-li">{feature}</li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="shop-section-shop-buttons">
                        <button className="card-btn shop-size" onClick={() => addToCart()}>Add to Cart</button>
                        <button className="buy-btn shop-size" onClick={() => orderNow()}>Buy Now</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Shop
