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
      <div className="product-card-single">
        <div className="product-card-single-top">
          <div className="offer-type">{topLabel}</div>
          {/* <div className="liked-top"><LiaSave onClick={()=>alert("liked")} /></div> */}
        </div>
        <div className="product-card-single-mid">
          <img src={banner} alt="" className="product-card-single-mid-image" />
        </div>
        <div className="product-card-single-bottom">
          <div className="prodcut-card-title">
            <p className="prodcut-title-p">
              {title}
            </p>
          </div>
          <div className="product-card-price">
            <span className="product-card-price-single">
              <MdCurrencyRupee size={20} /> {deal}
            </span>
            <span className="product-card-price-offer">{discount}% off</span>
          </div>
          <div className="product-card-price-mrp">
            <span className="product-card-mrp-span">
              MRP <MdCurrencyRupee /> {MRP}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductCard
