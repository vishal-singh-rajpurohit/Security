import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../../Styles/Products/views/ProductScroll.css"
import ProductCard from '../ProductCards/ProductCard'

import { useSelector } from 'react-redux';

const ProductScroll = () => {

    const products = useSelector((state) => state.product.trandingProducts)

    return (
        <section className="product-page-slide-section">
            <div className="product-slide-section-top">
                <div className="text-s">
                    <h2 className="heading-scroll">Tranding Solutions!</h2>
                    <p className="discount-text">Get Full Satisfying Solution</p>
                </div>
                <div className="view-all-text-">
                    <span className="view-all-txt">View All <MdKeyboardArrowRight /> </span>
                </div>
            </div>
            <div className="product-page-slide-inner-section">
                <div className="product-page-slide">
                    {
                        products && products.map((item, index)=>(
                            <ProductCard key={index} topLabel={"Best Seller"} productId={item._id} banner={item.FrontImage} title={item.ProductName} deal={item.DealPrice} MRP={item.OriginalPrice} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductScroll
