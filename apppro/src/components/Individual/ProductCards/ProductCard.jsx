import React, { useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { LiaSave } from "react-icons/lia";
import { MdCurrencyRupee } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ productId, topLabel, banner, title, deal, MRP }) => {

  const [discount, setDiscount] = React.useState(0);

  useEffect(() => {
    const discountValue = Math.round(((MRP - deal) / MRP) * 100);
    setDiscount(discountValue);
  });

  return (
    <NavLink to={`/shop/shopping?pid=${productId}`} >
      <div class="product-card-single">
        <div class="product-card-single-top">
          <div class="offer-type">{topLabel}</div>
          {/* <div class="liked-top"><LiaSave onClick={()=>alert("liked")} /></div> */}
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
    </NavLink>
  )
}

export default ProductCard
