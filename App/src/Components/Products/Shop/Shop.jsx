import React, { useContext, useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi'
import { GoReport } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { openReportBox } from '../../../Functions/Ui/modalSlice'
import AuthContext from '../../../context/AuthContext.context'
import '../../../Styles/shop.css'

import tempimg from '../../../Assets/camera/singledome.png'
import { MdCurrencyRupee } from 'react-icons/md'

const Shop = () => {
    const dispatch = useDispatch();
    const setOpenReport = () => dispatch(openReportBox());

    const { addToCart, placeOrder} = useContext(AuthContext);
    const { product, loggedIn, userType, showCaseImage, setShowCaseImage, setOpenConform } = useContext(AuthContext);

    const [index, setIndex] = useState(0)

    const setSlideShow = () => {
        if (product.ShowCaseImages.length - 1 === index) {
            console.log("zero here");
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }
    const setSlideShowMinus = () => {
        if (index === 0) {
            console.log("zero :", product.ShowCaseImages.length - 1)
            setIndex(product.ShowCaseImages.length - 1)
        } else {
            setIndex(index - 1);
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    useEffect(()=>{
        console.log("product is :", product)
    },[])

    return (
        <section class="shop-main">
            <div class="left-shop">
                <div class="shop-left-full-view">
                    <img src={product.ShowCaseImages[index]} alt="" class="shop-image-full" />
                </div>
                <div class="shop-left-view-">
                    <div class="shop-showcase">
                        <span class="show-more-text">Look at product</span>
                        <span class="next-prev">
                            <span class="n-prev" onClick={() => setSlideShowMinus()}>{"<"}</span>
                            <span class="n-prev" onClick={() => setSlideShow()}>{">"}</span>
                        </span>
                    </div>
                    <div class="shop-slide-overflow">
                        <img class="slide-selection" onClick={() => setIndex(0)} src={product.ShowCaseImages[0]} />
                        <img class="slide-selection" onClick={() => setIndex(1)} src={product.ShowCaseImages[1]} />
                        <img class="slide-selection" onClick={() => setIndex(2)} src={product.ShowCaseImages[2]} />
                        <img class="slide-selection" onClick={() => setIndex(3)} src={product.ShowCaseImages[3]} />
                    </div>
                </div>
            </div>
            <div class="right-shop">
                <div class="shop-left-top">
                    <div class="shop-left-top-top">
                        <p class="shop-title">
                            {product.ProductName}
                        </p>
                        <span class="shop-cctv">CCTV</span>
                    </div>
                    <div class="shop-left-top-mid">
                        <span class="review">*****</span>
                        <span class="review-number">Total 500 Orders</span>
                    </div>
                </div>
                <div class="shop-left-two">
                    <div class="price-">
                        <span class="price-symbol"><MdCurrencyRupee size={25} /></span>
                        <span class="price-money">{product.Price}</span>
                    </div>
                </div>
                <div class="shop-left-three">
                    <div class="description-three">
                        <p class="descrition-size">
                            {product.Description}
                        </p>
                    </div>
                </div>
                <div class="shop-left-five">
                    <ul class="shop-specification-ul">
                        <li class="shop-specification-li">
                            <shop class="specification-key">Channel : </shop>
                            <shop class="specification-value">5</shop>
                        </li>
                        <li class="shop-specification-li">
                            <shop class="specification-key">Channel : </shop>
                            <shop class="specification-value">5</shop>
                        </li>
                        <li class="shop-specification-li">
                            <shop class="specification-key">Channel : </shop>
                            <shop class="specification-value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magnam.</shop>
                        </li>
                        <li class="shop-specification-li">
                            <shop class="specification-key">Channel : </shop>
                            <shop class="specification-value">5</shop>
                        </li>
                    </ul>
                </div>
                <div class="shop-left-four">
                    <div class="quantity-text">
                        <span class="quantity--text">Select Quantity</span>
                    </div>
                    <div class="quantity-size">
                        <span class="q-size">1</span>
                        <span class="q-size">2</span>
                        <span class="q-size">3</span>
                        <span class="q-size">4</span>
                        <span class="q-size">5</span>
                        <span class="q-size">6</span>
                        <span class="q-size">7</span>
                        <span class="q-size">8</span>
                    </div>
                </div>
                <div class="shop-left-bottom">
                    <button class="button-shop-dark" onClick={()=>setOpenConform(true)}>Buy Now</button>
                    <button class="button-shop-lite" onClick={() => addToCart(product._id)}>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default Shop;