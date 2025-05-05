import React from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const ProductCard = () => {
  return (
    <div class="product-card-single">
      <div class="product-card-single-top">
        <div class="offer-type">Best for small Stores</div>
        <div class="liked-top"><AiOutlineHeart /></div>
      </div>
      <div class="product-card-single-mid">
        <img src="./Assets/cam.png" alt="" class="product-card-single-mid-image" />
      </div>
      <div class="product-card-single-bottom">
        <div class="prodcut-card-title">
          <p class="prodcut-title-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet voluptatibus
            blanditiis magni explicabo reiciendis fugit quod tempora similique aliquam eius ad
            numquam maiores, natus, nulla totam ipsa modi. Excepturi.
          </p>
        </div>
        <div class="product-card-price">
          <span class="product-card-price-single">
            $25,00,0
          </span>
          <span class="product-card-price-offer">28% off</span>
        </div>
        <div class="product-card-price-mrp">
          <span class="product-card-mrp-span">
            MRP 29,000
          </span>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
