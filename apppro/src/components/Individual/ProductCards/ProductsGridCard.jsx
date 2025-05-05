import React from 'react'

import x from '../../../Assets/Backgrounds/log-bg-3.jpg'

const ProductsGridCard = () => {
  return (
    <div class="prodcut-grid-card">
      <div class="prodcut-grid-card-top">
        <p class="prodcut-grid-title">Tranding CCTV Camera</p>
        <div class="product-grid-offet-text">
          starting from <span class="product-grid-text-pricing">$7400</span>
        </div>
      </div>
      <div class="prodcut-grid-card-bottom">
        <img src={x} alt="" class="product-grid-card-bottom-img" />
      </div>
    </div>
  )
}

export default ProductsGridCard
