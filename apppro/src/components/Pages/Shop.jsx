import { CiShare2 } from "react-icons/ci";
import "../../Styles/shop.css"

import x from "../../Assets/Backgrounds/log-bg-3.jpg"
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProductsError, fetchProductsStart } from "../../App/functions/product.slice";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setScrolled } from "../../App/functions/variable.slice";


const Shop = () => {

    const { dispatch } = useContext(AppContext);

    async function selectProduct(product_id) {
        dispatch(fetchProductsStart());
        try {
            const response = await axios.get(
                `http://localhost:5000/api/v2/main/serve/select-product/?id=${product_id}`
            );
            
            setProduct(response.data.data.ProductData)

        } catch (error) {
            console.log("Error while selecting product ", error);
            dispatch(fetchProductsError());
        }
    }

    const [searchParams] = useSearchParams();
    const productId = searchParams.get('pid');

    const [Product, setProduct] = useState({
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
    }, [])

    const scrolled = useSelector((state) => state.variable.scrolled);
    useEffect(()=>{
        if(!scrolled){
            dispatch(setScrolled())
        }
    }, [scrolled])

    return (
        <section className="shop-page">
            <section className="shop-section">
                <div className="shop-section-left">
                    <div className="overview-top-share">
                        <CiShare2 style={{ cursor: "pointer" }} size={20} />
                    </div>
                    <div className="shop-overview-max">
                        <img src={Product.ShowImages[0]} loading="lazy" alt="" className="shop-overview-max-img" />
                    </div>
                    <div className="overview-slide">
                        <div className="left-overview-btn"><BsChevronLeft size={30} cursor={"Pointer"} /></div>
                        <div className="overview-slide-overflow">
                            <div className="overview-dl-div">
                                <div className="overview-sm-imge">
                                    <img src={x} alt="" className="shop-overview-min-img" />
                                </div>
                                <div className="overview-sm-imge">
                                    <img src={x} alt="" className="shop-overview-min-img" />
                                </div>
                                <div className="overview-sm-imge">
                                    <img src={x} alt="" className="shop-overview-min-img" />
                                </div>
                            </div>
                        </div>
                        <div className="left-overview-btn"><BsChevronRight size={30} cursor={"Pointer"} /></div>
                    </div>
                </div>
                <div className="shop-section-right">
                    <div className="shop-section-right-top-1">
                        <div className="offer-on-shop">Flat { Math.round(((Product.OriginalPrice - Product.DealPrice) / Product.OriginalPrice) * 100)}% off</div>
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
                            MRP <span className="mrp-price-ammount">₹{Product.DealPrice} </span><span className="mrp-txs">(including of all taxes) </span><span className="mrp-off">{ Math.round(((Product.OriginalPrice - Product.DealPrice) / Product.OriginalPrice) * 100)}% OFF</span>
                        </div>
                    </div>
                    <div className="more-details">
                        <h3 className="product-details-heading-shop">Product Summary</h3>
                        <ul className="product-detail-ul">
                            {
                                Product.ProductFeatures?.map((feature, index) =>(
                                    <li className="product-details-li">{feature}</li>
                                ))
                            }
                           
                        </ul>
                    </div>
                    <div className="shop-section-shop-buttons">
                        <button className="card-btn shop-size">Add to Cart</button>
                        <button className="buy-btn shop-size">Buy Now</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Shop
