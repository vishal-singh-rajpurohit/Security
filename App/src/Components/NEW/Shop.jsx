import React from 'react'
import "../../Styles/New/shop.css"

const Shop = () => {
  return (
    <section className="shop-page">
    <section className="shop-section">
        <div className="shop-section-left">
            <div className="overview-top-share">
                <button className="share-btn">Share</button>
            </div>
            <div className="shop-overview-max">
                <img src={""} loading="lazy" alt="" className="shop-overview-max-img" />
            </div>
            <div className="overview-slide">
                <div className="left-overview-btn">l</div>
                <div className="overview-slide-overflow">
                    <div className="overview-dl-div">
                        <div className="overview-sm-imge">
                            <img src={""} alt="" className="shop-overview-min-img" />
                        </div>
                        <div className="overview-sm-imge">
                            <img src={""} alt="" className="shop-overview-min-img" />
                        </div>
                        <div className="overview-sm-imge">
                            <img src={""} alt="" className="shop-overview-min-img" />
                        </div>
                    </div>
                </div>
                <div className="left-overview-btn">r</div>
            </div>
        </div>
        <div className="shop-section-right">
            <div className="shop-section-right-top-1">
                <div className="offer-on-shop">Flat 12% off</div>
            </div>
            <div className="shop-section-right-mid">
                <p className="product-title">LG 109.22 cm (43 inch) 4K Ultra TV, Ashed Blue, 43UT80506LA</p>
                <div className="rating-div">
                    * <span style="font-weight: 600;">5</span> (1 Review)
                </div>
                <div className="deal-price">
                    Deal Price <span className="deal-price-ammount"> $37,990.00</span>
                </div>
                <div className="offer-price">
                    Offer Price <span className="offer-price-ammount">$37,990.00</span>
                </div>
                <div className="mrp-price">
                    MRP <span className="mrp-price-ammount">$37,990.00 </span><span className="mrp-txs">(including of all taxes) </span><span className="mrp-off">30% OFF</span>
                </div>
            </div>
            <div className="more-details">
                <h3 className="product-details-heading-shop">Product Summary</h3>
                <ul className="product-detail-ul">
                    <li className="product-details-li">product details 1</li>
                    <li className="product-details-li">product details 2</li>
                    <li className="product-details-li">product details 3</li>
                    <li className="product-details-li">product details 4</li>
                    <li className="product-details-li">product details 5</li>
                    <li className="product-details-li">product details 6</li>
                    <li className="product-details-li">product details 7</li>
                </ul>
            </div>
            <div className="shop-section-shop-buttons">
                <button className="card-btn shop-size">Add to Cart</button>
                <button className="buy-btn shop-size">Buy Now</button>
            </div>
        </div>
    </section>
</section>
  )
}

export default Shop
