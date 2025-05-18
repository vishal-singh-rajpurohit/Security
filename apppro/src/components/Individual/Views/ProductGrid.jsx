import React, { useEffect } from "react";
import ProductCard2 from "../ProductCards/ProductCard2";
import "../../../Styles/Products/views/ProductGridCard.css";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    console.log("Product: ", products, products.length);
  }, [])

  return (
    <section className="prodcuts-grid-section">
      <div className="product-slide-section-top">
        <div className="text-s">
          <h2 className="heading-scroll">Explore Products!</h2>
          {/* <p className="discount-text">Get 10% Bank Discounts</p>  */}
        </div>
      </div>
      <div className="product-grid-">
        {
          // product && product.length > 0 ? (
            products.map((item, index) => (
              <ProductCard2
                banner={item.FrontImage}
                deal_price={item.DealPrice}
                offer_price={item.OriginalPrice}
                productId={item._id}
                title={item.ProductName}
                key={index}
              />
            ))
          // ): (
            // <h1 >No more products</h1>
          // )
        }
        { }
      </div>
    </section>
  );
};

export default ProductGrid;
