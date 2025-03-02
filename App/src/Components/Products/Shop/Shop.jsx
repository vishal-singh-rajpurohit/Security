import React, { useContext, useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi'
import { GoReport } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { openReportBox } from '../../../Functions/Ui/modalSlice'
import AuthContext from '../../../context/AuthContext.context'
import '../../../Styles/shop.css'
import { GrLineChart } from "react-icons/gr";

import tempimg from '../../../Assets/camera/singledome.png'
import { MdCurrencyRupee } from 'react-icons/md'

const Shop = () => {
    const dispatch = useDispatch();
    const setOpenReport = () => dispatch(openReportBox());

    const { addToCart, placeOrder } = useContext(AuthContext);
    const { product, setProduct, loggedIn, userType, showCaseImage, setShowCaseImage, setOpenConform } = useContext(AuthContext);

    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true); // New state to track loading

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (!product) {
            const localProduct = JSON.parse(window.localStorage.getItem("CurrentItem"));
            if (localProduct) {
                setProduct(localProduct);
                console.log("Product found in localStorage");
            } else {
                console.log("Product not found in localStorage");
            }
        }
        setLoading(false); // Mark as loaded after fetching
    }, []);

    useEffect(()=>{
        console.log("Shop part is here ", product);
        localStorage.setItem("test", "data");
    },[])

    const setSlideShow = () => {
        if (product && product.ShowCaseImages.length - 1 === index) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const setSlideShowMinus = () => {
        if (product && index === 0) {
            setIndex(product.ShowCaseImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    // Prevent rendering if product is undefined
    if (!product || loading) {
        return <p>Loading product details...</p>; // Or use a spinner
    }

    return (
        <section className="shop-main">
            <div className="left-shop">
                <div className="shop-left-full-view">
                    <img src={product.ShowCaseImages[index]} alt="" className="shop-image-full" />
                </div>
                <div className="shop-left-view-">
                    <div className="shop-showcase">
                        <span className="show-more-text">Look at product</span>
                        <span className="next-prev">
                            <span className="n-prev" onClick={setSlideShowMinus}>{"<"}</span>
                            <span className="n-prev" onClick={setSlideShow}>{">"}</span>
                        </span>
                    </div>
                    <div className="shop-slide-overflow">
                        {product.ShowCaseImages.map((img, idx) => (
                            <img key={idx} className="slide-selection" onClick={() => setIndex(idx)} src={img} alt={`Slide ${idx}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mid-barrier">
                        <span className="bar-span"> <GrLineChart color='#229b22' /> 170 people ordered last 2 months</span>
                </div>
            <div className="right-shop">
               
                <div className="shop-left-top">
                    <div className="shop-left-top-top">
                        <p className="shop-title">{product.ProductName}</p>
                        <span className="shop-cctv">CCTV</span>
                    </div>
                    <div className="shop-left-top-mid">
                        <span className="review">*****</span>
                        <span className="review-number">Total 500 Orders</span>
                    </div>
                </div>
                <div className="shop-left-two">
                    <div className="price-">
                        <span className="price-symbol"><MdCurrencyRupee size={25} /></span>
                        <span className="price-money">{product.PriceForCustomers}</span>
                    </div>
                </div>
                <div className="shop-left-three">
                    <div className="description-three">
                        <p className="descrition-size">{product.Explaination}</p>
                    </div>
                </div>
                <div className="shop-left-bottom">
                    <button className="button-shop-dark" onClick={() => setOpenConform(true)}>Buy Now</button>
                    <button className="button-shop-lite" onClick={() => addToCart(product._id)}>Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default Shop;
