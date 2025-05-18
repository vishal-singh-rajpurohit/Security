import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import x from "../../../Assets/Backgrounds/log-bg-3.jpg"
import { AiOutlineHeart } from 'react-icons/ai'

const ProductCard2 = ({ productId, title, banner, deal_price, offer_price, }) => {

    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const discountValue = Math.round(((offer_price - deal_price) / offer_price) * 100);
        setDiscount(discountValue);
    });

    return (
        <NavLink to={`/shop/shopping?pid=${productId}`} >
            <div className="product-card-single product-card-single-2">
                <div className="product-card-single-top product-card-single-top-2">
                    <div className="offer-type offer-type-2">Best for small Stores</div>
                    <div className="liked-top" onClick={() => alert("hii")}><AiOutlineHeart /></div>
                </div>
                <div className="product-card-single-mid product-card-single-mid-2">
                    <img src={banner} alt="" className="product-card-single-mid-image product-card-single-mid-image-2" />
                </div>
                <div className="product-card-single-bottom product-card-single-bottom-2">
                    <div className="prodcut-card-title prodcut-card-title-2">
                        <p className="prodcut-title-p prodcut-title-p-2">
                            {
                                title
                            }
                        </p>
                    </div>
                    <div className="product-card-price product-card-price-2">
                        <span className="product-card-price-single product-card-price-single-2">
                            $25,00,0
                        </span>
                        <span className="product-card-price-offer product-card-price-offer-2">{discount}% off</span>
                    </div>
                    <div className="product-card-price-mrp product-card-price-mrp-2">
                        <span className="product-card-mrp-span product-card-mrp-span-2">
                            MRP 29,000
                        </span>
                    </div>
                </div>
            </div>
        </NavLink >
    )
}

export default ProductCard2
