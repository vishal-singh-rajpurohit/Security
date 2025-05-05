export function ProductCardOne({ productImage, product_name, Active_price, mrp, offer_text, product_id }) {
    return (
        <div className="product-card-single">
            <div className="product-card-single-top">
                <div className="offer-type">Best for small Stores</div>
                <div className="liked-top">@</div>
            </div>
            <div className="product-card-single-mid">
                <img src={""} alt="" className="product-card-single-mid-image" />
            </div>
            <div className="product-card-single-bottom">
                <div className="prodcut-card-title">
                    <p className="prodcut-title-p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet voluptatibus
                        blanditiis magni explicabo reiciendis fugit quod tempora similique aliquam eius ad
                        numquam maiores, natus, nulla totam ipsa modi. Excepturi.
                    </p>
                </div>
                <div className="product-card-price">
                    <span className="product-card-price-single">
                        $25,00,0
                    </span>
                    <span className="product-card-price-offer">28% off</span>
                </div>
                <div className="product-card-price-mrp">
                    <span className="product-card-mrp-span">
                        MRP 29,000
                    </span>
                </div>
            </div>
        </div>
    )
}

export function TrandingProductCard({ product_type, starting_price, category_image }) {
    return (
        <div class="prodcut-grid-card">
            <div class="prodcut-grid-card-top">
                <p class="prodcut-grid-title">Tranding CCTV Camera</p>
                <div class="product-grid-offet-text">
                    starting from <span class="product-grid-text-pricing">$7400</span>
                </div>
            </div>
            <div class="prodcut-grid-card-bottom">
                <img src={""} alt="" class="product-grid-card-bottom-img" />
            </div>
        </div>
    )
}