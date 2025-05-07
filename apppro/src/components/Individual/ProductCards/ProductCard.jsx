import React, { useEffect } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { LiaSave } from "react-icons/lia";
import { MdCurrencyRupee } from 'react-icons/md';

const ProductCard = ({topLabel, banner, title, deal, MRP}) => {

  const [discount, setDiscount] = React.useState(0);

  useEffect(() => {
    const discountValue = Math.round(((MRP - deal) / MRP) * 100);
    setDiscount(discountValue);
  });

  return (
    <div class="product-card-single">
      <div class="product-card-single-top">
        <div class="offer-type">{topLabel}</div>
        <div class="liked-top"><LiaSave /></div>
      </div>
      <div class="product-card-single-mid">
        <img src={banner} alt="" class="product-card-single-mid-image" />
      </div>
      <div class="product-card-single-bottom">
        <div class="prodcut-card-title">
          <p class="prodcut-title-p">
            {title}
          </p>
        </div>
        <div class="product-card-price">
          <span class="product-card-price-single">
            <MdCurrencyRupee size={20} /> {deal}
          </span>
          <span class="product-card-price-offer">{discount}% off</span>
        </div>
        <div class="product-card-price-mrp">
          <span class="product-card-mrp-span">
            MRP <MdCurrencyRupee /> {MRP}
          </span>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
