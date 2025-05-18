
const ProductsGridCard = ({ title, start, banner }) => {
  return (
    <div className="prodcut-grid-card">
      <div className="prodcut-grid-card-top">
        <p className="prodcut-grid-title">{title}</p>
        <div className="product-grid-offet-text">
          starting from <span className="product-grid-text-pricing">₹{start}</span>
        </div>
      </div>
      <div className="prodcut-grid-card-bottom">
        <img src={banner} alt={title} className="product-grid-card-bottom-img" />
      </div>
    </div>
  )
}

export default ProductsGridCard
