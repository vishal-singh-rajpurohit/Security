import "../../Styles/cart.css"
import X from "../../Assets/Slides/sld5.jpg"
import { ImageSlider } from "../Individual/Slides"
import { useEffect, useState } from "react"


const CartItem = ({ productId, banner, title, qunatity, price }) => {

  let [quantity, setQunatity] = useState(1);

  const [totalValue, setTotalValue] = useState(10);

  useEffect(() => {
    setTotalValue(quantity * 400)
  }, [quantity])



  async function changeQunatity() {
    try {

    } catch (error) {
      console.log("unable to change qunatity: ", error);
    }
  }

  async function remove() {
    try {

    } catch (error) {
      console.log("unable to remove item: ", error);
    }
  }

  return (
    <div className="cart-item">
      <img src={X} alt="Product Image" />
      <div className="item-info">
        <p>Another Product</p>
        <p className="item-price">₹{totalValue}</p>
      </div>
      <div className="item-actions">

        <div className="quantity-controls">
          <button disabled={quantity === 1 ? true : false} onClick={() => setQunatity(quantity -= 1)}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={() => setQunatity(quantity += 1)}>+</button>
        </div>
        <button style={{ backgroundColor: "lightgreen" }} className="remove-btn">Shop Now</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  )
}

const Cart = () => {

  async function clearCart() {

  }

  return (
    <section className="cart-page-section">
      <ImageSlider />
      <div className="cart-container">
        <div className="cart-left">
          <h2 style={{ marginBottom: "1rem" }}>Your Cart</h2>
          <CartItem />
          <div className="cart-item">
            <img src={X} alt="Product Image" />
            <div className="item-info">
              <p>Another Product</p>
              <p className="item-price">$15.00</p>
            </div>
            <div className="item-actions">

              <div className="quantity-controls">
                <button>-</button>
                <span className="quantity-display">2</span>
                <button>+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-right">
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="summary-line">
              <span>Items Total:</span>
              <span>$50.00</span>
            </div>
            <div className="summary-line">
              <span>Tax:</span>
              <span>$5.00</span>
            </div>
            <div className="summary-line">
              <span><strong>Grand Total:</strong></span>
              <span><strong>$55.00</strong></span>
            </div>
            <button className="clear-cart-btn">Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
