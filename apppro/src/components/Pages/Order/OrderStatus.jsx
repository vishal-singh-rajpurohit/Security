import './OrderStatus.css'; // Move styles to this file
import "../../../Styles/orderStatus.css"
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { loaded, loading } from '../../../App/functions/variable.slice';
import { AppContext } from '../../../context/AppContext';

const steps = [
  { number: 1, label: 'Unverified' },
  { number: 2, label: 'Processing' },
  { number: 3, label: 'Shipped' },
  { number: 4, label: 'Out for Delivery' },
  { number: 5, label: 'Delivered', status: '' },
];

const OrderStatus = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderid');

  const { Methods } = useContext(AppContext);

  const [order, setOrder] = useState({
    quantity: 1,
    status: "",
    createdAt: "",
    location: "",
    city: "",
    state: "",
    pincode: null,
    product: {
      ProductName: "",
      DealPrice: 0
    }
  });

  const [user, setUser] = useState({})

  const [num, setNum] = useState(1);

  async function fetchOrder() {
    dispatch(loading());
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/auth/orders/serve-one-order`,
        {
          orderId
        },
        {
          withCredentials: true
        }
      );

      setOrder(response.data.data.Order[0]);
      setUser(response.data.data.User)

      switch (order.status) {
        case "UNVERIFIED":
          console.log("UNVERIFIED");
          setNum(1);
          break;

        case "VERIFIED":
          console.log("Verified");

          setNum(2);
          break;

        case "SHIPPED":
          console.log("VerSHIPPEDified");
          setNum(3);
          break;

        case "Out Of Delivery":
          console.log("Delivery");
          setNum(4);
          break;

        case "DELIVERED":
          console.log("DELIVERED");
          setNum(5);
          break;

        default:
          setNum(0);
          break;
      }

    } catch (error) {
      fetchOrder();
      console.log("Error while fetching product: ", error);
    } finally {
      dispatch(loaded());
    }
  }

  useEffect(() => {
    fetchOrder();
  }, [])

  return (
    <section className="order-status-page">
      <div className="status-container">
        {/* Order Header */}
        <div className="order-header">
          <h2>Order #123456789</h2>
          <p>Placed on: May 12, 2025</p>
        </div>

        {/* Order Progress Steps */}
        <div className="status-steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step ${step.number < num ? "completed" : ""} ${step.number === num ? "active" : ""}`}
            >
              <div className="step-circle">{step.number}</div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>

        {/* Order Details */}
        <div className="order-details">
          <h3>Delivery Info</h3>
          <p>Recipient: {user.name}</p>
          <p>Address: {order.location + " " + order.city + " " + order.state + " " + order.pincode}</p>
          <p>Expected Delivery: {Methods.formatDate(order.createdAt)}</p>
          {/* <p>Courier: FedEx</p> */}
        </div>
      </div>
    </section>
  );
};

export default OrderStatus;
