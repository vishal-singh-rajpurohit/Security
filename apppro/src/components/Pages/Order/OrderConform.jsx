import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios"
import "../../../Styles/Orderconform.css"
import { useDispatch } from "react-redux";
import { loading, loaded, } from "../../../App/functions/variable.slice";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const OrderConform = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderid');

    const [order, setOrder] = useState({
        quantity: 1,
        status: "UNVERIFIED",
        createdAt: "",
        product: {
            ProductName: "",
            DealPrice: 0
        }
    });

    const { setSuccess, setFail, setSuccessText, Methods } = useContext(AppContext);

    async function fetchOrder() {
        dispatch(loading());
        try {
            const response = await axios.post(`http://localhost:5000/api/v2/auth/orders/serve-one-order`,
                {
                    orderId

                },
                {
                    withCredentials: true
                }
            );

            console.log("Order fetched: ", response.data.data.Order[0]);
            setOrder(response.data.data.Order[0]);
        } catch (error) {
            fetchOrder();
            console.log("Error while fetching product: ", error);
        } finally {
            dispatch(loaded());
        }
    }


    async function confirm() {
        dispatch(loading());
        try {
            await axios.post(`http://localhost:5000/api/v2/auth/orders/verify-order`,
                {
                    orderId
                },
                {
                    withCredentials: true
                });

            setSuccessText("Order Verified successfully");
            setSuccess(true);

            navigate("/shop/orders", { replace: true });

        } catch (error) {
            setFail(true)
            setSuccess(true);
            setSuccessText("Somthing went wrong");
            console.log("Error while Confirm order: ", error)
        } finally {
            dispatch(loaded());
        }
    }

    useEffect(() => {
        fetchOrder();
    }, [])

    return (
        <section className="confrom-order-section">
            <div class="confirm-container">
                <h2>Confirm Your Order</h2>

                <div class="order-summary">
                    <div class="summary-item">
                        <span>Product: </span>
                        <strong>{order.product.ProductName || undefined}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Quantity: </span>
                        <strong>{order.quantity || 1}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Shipping: </span>
                        <strong>{order.status || undefined}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Estimated Delivery: </span>
                        <strong>{Methods.formatDate(order.createdAt)}</strong>
                    </div>
                    <div class="summary-item total">
                        <span>Total: </span>
                        <strong>₹{order.product.DealPrice * (order.quantity || 1) || 0}</strong>
                    </div>
                </div>

                <button class="confirm-btn" onClick={confirm}>Confirm Order</button>
            </div>
        </section>
    )
}


const OrderCancel = () => {

    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderid');

    async function fetchOrder(params) {

    }

    async function cancel() {

    }

    return (
        <section className="confrom-order-section">
            <div class="confirm-container">
                <h2>Cancel Your Order</h2>

                <div class="order-summary">
                    <div class="summary-item">
                        <span>Product:</span>
                        <strong>Wireless Earbuds</strong>
                    </div>
                    <div class="summary-item">
                        <span>Quantity:</span>
                        <strong>2</strong>
                    </div>
                    <div class="summary-item">
                        <span>Shipping:</span>
                        <strong>Free</strong>
                    </div>
                    <div class="summary-item">
                        <span>Estimated Delivery:</span>
                        <strong>May 18, 2025</strong>
                    </div>
                    <div class="summary-item total">
                        <span>Total:</span>
                        <strong>₹1,998</strong>
                    </div>
                </div>

                <button class="cancel-btn">Confirm Order</button>
            </div>
        </section>
    )
}
export { OrderConform, OrderCancel }
