import React from 'react'
import "../../../Styles/Products/views/ProductScroll.css"
import ProductCard from '../ProductCards/ProductCard'

const ProductScroll = () => {
    return (
        <section class="product-page-slide-section">
            <div class="product-slide-section-top">
                <div class="text-s">
                    <h2 class="heading-scroll">Tranding Laptops!</h2>
                    <p class="discount-text">Get 10% Bank Discounts</p>
                </div>
                <div class="view-all-text-">
                    <span class="view-all-txt">View All{">"} </span>
                </div>
            </div>
            <div class="product-page-slide-inner-section">
                <div class="product-page-slide">
                   <ProductCard />
                   <ProductCard />
                   <ProductCard />
                   <ProductCard />
                </div>
            </div>
        </section>
    )
}

export default ProductScroll
