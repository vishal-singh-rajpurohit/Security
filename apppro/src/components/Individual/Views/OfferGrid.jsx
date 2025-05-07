import React from 'react'
import ProductsGridCard from '../ProductCards/ProductsGridCard'

import "../../../Styles/Products/views/ProductGrid.css"
import ProductCard from '../ProductCards/ProductCard'

const OfferGrid = () => {
  return (
    <section class="prodcuts-grid-section">
      <div class="product-slide-section-top">
        <div class="text-s">
          <h2 class="heading-scroll">Tranding Most Liked Categories!</h2>
          {/* <p class="discount-text">Get 10% Bank Discounts</p>  */}
        </div>
      </div>
      <div class="product-grid-">
        <ProductsGridCard />
        <ProductsGridCard />
        <ProductsGridCard />
        <ProductsGridCard />
      </div>
    </section>
  )
}

export default OfferGrid
