import { ProductCardOne } from "../ProductCards";
import "../../../Styles/New/offerScroll.css"

function OfferScroll({ heading, OfferProducts }) {
    return (
        <section class="product-page-slide-section">
            <div class="product-slide-section-top">
                <div class="text-s">
                    <h2 class="heading-scroll">Tranding Laptops!</h2>
                    <p class="discount-text">Get 10% Bank Discounts</p>
                </div>
                <div class="view-all-text-">
                    <span class="view-all-txt">View All {">"} </span>
                </div>
            </div>
            <div class="product-page-slide-inner-section">
                <div class="product-page-slide">
                    <ProductCardOne />
                    <ProductCardOne />
                    <ProductCardOne />
                </div>
            </div>
        </section>
    )
}

