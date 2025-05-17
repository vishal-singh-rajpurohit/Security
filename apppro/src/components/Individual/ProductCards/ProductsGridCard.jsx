import x from '../../../Assets/Backgrounds/log-bg-3.jpg'

const ProductsGridCard = ({title, start, banner}) => {
  return (
    <div class="prodcut-grid-card">
      <div class="prodcut-grid-card-top">
        <p class="prodcut-grid-title">{title}</p>
        <div class="product-grid-offet-text">
          starting from <span class="product-grid-text-pricing">₹{start}</span>
        </div>
      </div>
      <div class="prodcut-grid-card-bottom">
        <img src={banner} alt={title} class="product-grid-card-bottom-img" />
      </div>
    </div>
  )
}

export default ProductsGridCard
