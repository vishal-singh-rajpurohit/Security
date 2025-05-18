import axios from "axios";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { loading, loaded, setScrolled } from "../../App/functions/variable.slice";
import { AppContext } from "../../context/AppContext";

import "../../Styles/orders.css";

const StatusButton = ({ status }) => {

  switch (status) {
    case "VERIFIED":
      return <div class="order-status status-pending">VERIFIED</div>

    case "PENDING":
      return <div class="order-status status-pending">PENDING</div>

    case "SHIPPED":
      return <div class="order-status status-shipped">Shipped</div>

    case "DELIVERED":
      return <div class="order-status status-delivered">Delivered</div>

    case "CANCELLED":
      return <div class="order-status status-cancelled">Cancelled</div>

    default:
      break;
  }

};

const OrderCard = ({ orderId, title, ammount, date, status }) => {

  const dispatch = useDispatch()
  const { Methods, setFail, setSuccess, setSuccessText } = useContext(AppContext);

  async function requestCancel(orderId) {
    dispatch(loading());
    try {
      await axios.post(`http://localhost:5000/api/v2/auth/orders/send-cancel-mail`,
        { orderId },
        {
          withCredentials: true
        }
      );

      setSuccessText("Please Check your Email! to Verify Order Cancellation.");
      setSuccess(true);

    } catch (error) {
      console.log("Error in Cancel request: ", error);

      setFail(true)
      setSuccess(true);
      setSuccessText("Unable proceed cancellation order");

    } finally {
      dispatch(loaded());
    }
  }


  return (
    <div class="order-card">
      <div class="order-header">
        <div class="order-id">Order #{orderId}</div>
        <div class="order-date">{Methods.formatDate(date)}</div>
      </div>
      <div class="order-body">
        <div class="order-info">
          <p>{title}</p>
          <p>Price: ₹{ammount}</p>
          {<StatusButton status={status} />}
        </div>
        <div class="order-actions">
          <button
            class="cancel-btn"
            disabled={status === "DELIVERED" || status === "CANCELLED"}
            onClick={() => requestCancel(orderId)}
          >
            Cancel
          </button>
          <NavLink to={`/shop/orders/status?orderid=${orderId}`}><button class="show-btn" style={{display: status === "CANCELLED"? "none": "flex"}} >Show</button></NavLink>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const dispatch = useDispatch();

  const { orders, setOrders } = useContext(AppContext);

  async function fetchOrders() {
    dispatch(loading());
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v2/auth/orders/serve-orders`,
        {},
        {
          withCredentials: true,
        }
      );

      console.log("Orders fetched: ", response);

      setOrders(response.data.data.Orders);
    } catch (error) {
      console.log("Error while fetching orders: ", error);
    } finally {
      dispatch(loaded());
    }
  }


  useEffect(() => {
    fetchOrders();
  }, []);

  const scrolled = useSelector((state) => state.variable.scrolled);
  useEffect(() => {
    if (!scrolled) {
      dispatch(setScrolled())
    }
  }, [scrolled]);

  return (
    <section className="order-section-page">
      <div class="orders-container">
        <h2>My Orders</h2>

        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <OrderCard
              key={order._id}
              orderId={order._id}
              title={order.product.ProductName}
              ammount={order.product.DealPrice}
              date={"1-2-4"}
              status={order.status}
            />
          ))
        ) : (
          <div class="order-card">
            <div class="order-header">
              <h1 className="ono-orders">No Orders</h1>
            </div>
          </div>
        )}

      </div>
    </section >

  );
};

export default Orders;
