import { TrandingProductCard } from "../ProductCards";
import "../../../Styles/New/trandingGrid.css"

export function TrandingGrid({ heading, TrandingProducts }) {
    return (
        <section class="prodcuts-grid-section">
            <div class="product-slide-section-top">
                <div class="text-s">
                    <h2 class="heading-scroll">Tranding Categories!</h2>
                    {/* <!-- <p class="discount-text">Get 10% Bank Discounts</p> --> */}
                </div>
            </div>
            <div class="product-grid-">
                <TrandingProductCard />
            </div>
        </section>
    )
}