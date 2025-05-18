import { useState } from 'react'
import "../../Styles/orderStatus.css"
import { Transition1 } from '../Individual/Transitions'
import { useSearchParams } from 'react-router-dom';

const OrderStatus = () => {

    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderid');

    const [isLoading, setIsLoading] = useState(false);

    function fetchOrderStatus(params) {
        try {

        } catch (error) {
            console.log("Error in Fetching Order Status: ", error);
        }
    }


    return (isLoading ? <Transition1 /> : <OrderStausPage />)
}

const OrderStausPage = ({ OrderId, orderDate, delaivaryDate, status, reciverName, delaivaryAddress }) => {
    return (
        <section className="order-status-page">
            <div class="status-container">

                <div class="order-header">
                    <h2>Order #123456789</h2>
                    <p>Delivery Date: May 12, 2025</p>
                </div>


                <div class="status-steps">
                    <div class="step completed">
                        <div class="step-circle">1</div>
                        <div class="step-label">Placed</div>
                    </div>
                    <div class="step completed">
                        <div class="step-circle">2</div>
                        <div class="step-label">Processing</div>
                    </div>
                    <div class="step completed">
                        <div class="step-circle">3</div>
                        <div class="step-label">Shipped</div>
                    </div>
                    <div class="step active">
                        <div class="step-circle">4</div>
                        <div class="step-label">Out for Delivery</div>
                    </div>
                    <div class="step">
                        <div class="step-circle">5</div>
                        <div class="step-label">Delivered</div>
                    </div>
                </div>

                <div class="order-details">
                    <h3>Delivery Info</h3>
                    <p>Recipient: John Doe</p>
                    <p>Address: 123 Main St, New York, NY 10001</p>
                    <p>Expected Delivery: May 16, 2025</p>
                </div>
            </div>
        </section>
    )
}


export default OrderStatus
