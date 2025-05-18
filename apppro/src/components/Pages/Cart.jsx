import axios from "axios"
import "../../Styles/cart.css"
import { ImageSlider } from "../Individual/Slides"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { loading, loaded } from "../../App/functions/variable.slice"


const CartItem = ({ ft, itemId, productId, banner, title, qunatity, price }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const user = useSelector((state) => state.auth.user)

  let [quantity, setQunatity] = useState(qunatity);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    changeQunatity();
    setTotalValue(quantity * price);
  }, [quantity]);

  async function orderNow() {
    if (!user) {
      navigator("/login");
    } else {
      navigator(`/shop/orders/details?pid=${productId}`);
    }
  }

  async function changeQunatity() {
    dispatch(loading())
    try {
      await axios.post(`http://localhost:5000/api/v2/auth/cart/chage-qunatity-cart`,
        {
          cartId: itemId,
          quantity: quantity
        },
        {
          withCredentials: true
        }
      );
    } catch (error) {
      console.log("Error while fetching errors: ", error);
    } finally {
      dispatch(loaded());
    }
  }

  async function remove() {
    dispatch(loading())
    try {
      await axios.post(`http://localhost:5000/api/v2/auth/cart/remove-from-cart`,
        {
          cartId: itemId
        },
        {
          withCredentials: true
        }
      );

      ft();
    } catch (error) {
      console.log("unable to remove item: ", error);
    } finally {
      dispatch(loaded());
    }
  }

  return (
    <div className="cart-item">
      <img src={banner} alt="Product Image" />
      <div className="item-info">
        <p>{title}</p>
        <p className="item-price">₹{totalValue}</p>
      </div>
      <div className="item-actions">
        <div className="quantity-controls">
          <button disabled={quantity === 1 ? true : false} onClick={() => setQunatity(quantity -= 1)}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={() => setQunatity(quantity += 1)}>+</button>
        </div>
        <button onClick={orderNow} style={{ backgroundColor: "lightgreen" }} className="remove-btn">Shop Now</button>
        <button className="remove-btn" onClick={remove}>Remove</button>
      </div>
    </div>
  )
}

const Cart = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([
    {
      _id: "",
      qunatity: 1,
      product: {
        _id: "",
        ProductName: "",
        DealPrice: 50000,
        FrontImage: ""
      }
    }
  ]);

  async function clearCart() {
    dispatch(loading())
    try {
      await axios.post(`http://localhost:5000/api/v2/auth/cart/clear-cart`,
        {},
        {
          withCredentials: true
        }
      );

      setCart({});

    } catch (error) {
      console.log("Error while clearing errors: ", error);
    } finally {
      dispatch(loaded());
    }
  }

  async function fetchCart() {
    dispatch(loading())
    try {
      const response = await axios.post(`http://localhost:5000/api/v2/auth/cart/serve-cart`,
        {},
        {
          withCredentials: true
        }
      );

      setCart(response.data.data.Cart);

    } catch (error) {
      console.log("Error while fetching errors: ", error);
    } finally {
      dispatch(loaded());
    }
  }

  useEffect(() => {
    fetchCart();
  }, [])

  return (
    <section className="cart-page-section">
      <ImageSlider />
      <div className="cart-container">
        <div className="cart-left">
          <h2 style={{ marginBottom: "1rem" }}>Your Cart</h2>
          {
            cart && cart.length > 0 ? (
              cart.map((item, index) => (
                <CartItem ft={fetchCart} itemId={item._id} banner={item.product.FrontImage} price={item.product.DealPrice} productId={item.product._id} key={index} qunatity={item.qunatity} title={item.product.ProductName} />
              ))
            ) : (
              <div className="cart-item">
                <h1 className="order text">No item in cart</h1>
              </div>
            )
          }

        </div>
        <div className="cart-right">
          <div className="cart-summary">
            {/* <h2>Cart Summary</h2> */}
            {/* <div className="summary-line">
              <span>Items Total:</span>
              <span>$50.00</span>
            </div> */}
            {/* <div className="summary-line">
              <span>Tax:</span>
              <span>$5.00</span>
            </div> */}
            {/* <div className="summary-line">
              <span><strong>Grand Total:</strong></span>
              <span><strong>$55.00</strong></span>
            </div> */}
            <button className="clear-cart-btn" onClick={clearCart} >Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart;
