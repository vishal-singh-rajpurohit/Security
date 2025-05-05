import React from 'react'
import x from "../../../Assets/Backgrounds/log-bg-3.jpg"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const ProductCard2 = () => {
    return (

        <div class="product-card-single product-card-single-2">
            <div class="product-card-single-top product-card-single-top-2">
                <div class="offer-type offer-type-2">Best for small Stores</div>
                <div class="liked-top"><AiOutlineHeart /></div>
            </div>
            <div class="product-card-single-mid product-card-single-mid-2">
                <img src={x} alt="" class="product-card-single-mid-image product-card-single-mid-image-2" />
            </div>
            <div class="product-card-single-bottom product-card-single-bottom-2">
                <div class="prodcut-card-title prodcut-card-title-2">
                    <p class="prodcut-title-p prodcut-title-p-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet voluptatibus
                        blanditiis magni explicabo reiciendis fugit quod tempora similique aliquam eius ad
                        numquam maiores, natus, nulla totam ipsa modi. Excepturi.
                    </p>
                </div>
                <div class="product-card-price product-card-price-2">
                    <span class="product-card-price-single product-card-price-single-2">
                        $25,00,0
                    </span>
                    <span class="product-card-price-offer product-card-price-offer-2">28% off</span>
                </div>
                <div class="product-card-price-mrp product-card-price-mrp-2">
                    <span class="product-card-mrp-span product-card-mrp-span-2">
                        MRP 29,000
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard2
