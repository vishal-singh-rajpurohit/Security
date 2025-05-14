import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../../Styles/Products/views/ProductScroll.css"
import ProductCard from '../ProductCards/ProductCard'

import { useSelector } from 'react-redux';

const ProductScroll = () => {

    const products = useSelector((state) => state.product.trandingProducts)

    return (
        <section class="product-page-slide-section">
            <div class="product-slide-section-top">
                <div class="text-s">
                    <h2 class="heading-scroll">Tranding Solutions!</h2>
                    <p class="discount-text">Get Full Satisfying Solution</p>
                </div>
                <div class="view-all-text-">
                    <span class="view-all-txt">View All <MdKeyboardArrowRight /> </span>
                </div>
            </div>
            <div class="product-page-slide-inner-section">
                <div class="product-page-slide">
                    {
                        products && products.map((item)=>(
                            <ProductCard topLabel={"Best Seller"} productId={item._id} banner={item.FrontImage} title={item.ProductName} deal={item.DealPrice} MRP={item.OriginalPrice} />
                        ))
                    }
                   {/* <ProductCard topLabel={"Best of Large Stores"} productId={"prox1212"} banner={X} title={"hd cctv setup with 4k recording"} deal={40000} MRP={45000} />
                   <ProductCard topLabel={"Best Out Door"} productId={"prox1212"} banner={X} title={"hd cctv setup with 4k recording"} deal={37000} MRP={40000} />
                   <ProductCard topLabel={"Budget Friendly"} productId={"prox1212"} banner={X} title={"hd cctv setup with 4k recording"} deal={17000} MRP={20000} /> */}
                </div>
            </div>
        </section>
    )
}

export default ProductScroll
