import { useSearchParams } from "react-router-dom";
import "../../../Styles/Orderconform.css"

const OrderConform = () => {

    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderid');

    async function fetchOrder(params) {

    }

    async function confirm() {
        
    }

    return (
        <section className="confrom-order-section">
            <div class="confirm-container">
                <h2>Confirm Your Order</h2>

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

                <button class="confirm-btn">Confirm Order</button>
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
