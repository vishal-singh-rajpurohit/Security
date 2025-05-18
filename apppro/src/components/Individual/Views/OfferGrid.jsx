import ProductsGridCard from '../ProductCards/ProductsGridCard'
import "../../../Styles/Products/views/ProductGrid.css"

import hd from "../../../Assets/Categores/hd.webp"
import ip from "../../../Assets/Categores/ip_cam.webp"
import nv from "../../../Assets/Categores/nv_cam.webp"
import wifi from "../../../Assets/Categores/wifi_cam.webp"

const OfferGrid = () => {
  return (
    <section className="prodcuts-grid-section">
      <div className="product-slide-section-top">
        <div className="text-s">
          <h2 className="heading-scroll">Tranding Most Liked Categories!</h2>
          {/* <p className="discount-text">Get 10% Bank Discounts</p>  */}
        </div>
      </div>
      <div className="product-grid-">
        <ProductsGridCard title={"Best HD Camera Setups"} start={12000} banner={hd} />
        <ProductsGridCard title={"Best WIFI Camera and Setups"} start={2000} banner={wifi} />
        <ProductsGridCard title={"Best Night Vision Camera Setups"} start={12000} banner={nv} />
        <ProductsGridCard title={"Best IP Camera Setups"} start={15000} banner={ip} />
      </div>
    </section>
  )
}

export default OfferGrid
