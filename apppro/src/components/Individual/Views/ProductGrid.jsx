import React from "react";
import ProductCard2 from "../ProductCards/ProductCard2";
import "../../../Styles/Products/views/ProductGridCard.css";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const product = useSelector((state) => state.product.products);

  return (
    <section class="prodcuts-grid-section">
      <div class="product-slide-section-top">
        <div class="text-s">
          <h2 class="heading-scroll">Explore Products!</h2>
          {/* <p class="discount-text">Get 10% Bank Discounts</p>  */}
        </div>
      </div>
      <div class="product-grid-">
        {product?.map((item, index) => (
          <ProductCard2
            banner={item.FrontImage}
            deal_price={item.DealPrice}
            offer_price={item.OriginalPrice}
            productId={item._id}
            title={item.ProductName}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
