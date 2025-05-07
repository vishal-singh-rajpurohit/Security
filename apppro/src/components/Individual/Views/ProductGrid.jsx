import React from 'react'
import ProductCard2 from '../ProductCards/ProductCard2'
import "../../../Styles/Products/views/ProductGridCard.css"

const ProductGrid = () => {
  return (
    <section class="prodcuts-grid-section">
      <div class="product-slide-section-top">
        <div class="text-s">
          <h2 class="heading-scroll">Explore Products!</h2>
          {/* <p class="discount-text">Get 10% Bank Discounts</p>  */}
        </div>
      </div>
      <div class="product-grid-">
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </div>
    </section>
  )
}

export default ProductGrid
