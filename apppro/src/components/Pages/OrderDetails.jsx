import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux"
import "../../Styles/OrderDetails.css"
import { useEffect, useState } from "react";

const OrderDetails = () => {

    const [searchParams] = useSearchParams();
    const productId = searchParams.get('pid'); // pid => productId

    const user = useSelector((state) => state.auth.user);

    const [orderDetails, setOrderDetails] = useState({
        phone: "",
        address: "",
        city: "",
        state: null,
        postCode: "",
    });

    const [prev, setPrev] = useState(false);

    async function order() {

    }

    function setPrevious() {
        if (prev) setOrderDetails({
            address: user?.address,
            city: user?.city,
            phone: user?.state,
            postCode: user?.postCode,
            state: user?.state
        })
        else {
            setOrderDetails({
                address: "",
                city: "",
                phone: "",
                postCode: null,
                state: "",
            });
        }
    }

    useEffect(() => {
        setPrevious()
    }, [prev])

    return (
        <section className="order-detals-seciton">
            <div className="form-container">
                <h2>Order Details</h2>
                <form>
                    <div className="form-group">
                        <label for="mobile">Mobile Number</label>
                        <input value={orderDetails.phone} onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })} type="tel" id="mobile" name="mobile" required />
                    </div>

                    <div className="form-group">
                        <label for="location">Location</label>
                        <input value={orderDetails.address} onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })} type="text" id="location" name="location" required />
                    </div>

                    <div className="form-group">
                        <label for="location">City</label>
                        <input value={orderDetails.city} onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })} type="text" id="city" name="city" required />
                    </div>

                    <div className="form-group">
                        <label for="pincode">Pincode</label>
                        <input value={orderDetails.postCode} onChange={(e) => setOrderDetails({ ...orderDetails, postCode: e.target.value })} type="text" id="pincode" name="pincode" required />
                    </div>

                    <div className="form-group">
                        <label for="state">State</label>
                        <input value={orderDetails.state} onChange={(e) => setOrderDetails({ ...orderDetails, state: e.target.value })} type="text" id="state" name="state" required />
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" checked={prev} onChange={(e) => setPrev(e.target.checked)} id="usePrevious" name="usePrevious" />
                        <label for="usePrevious">Use previous address</label>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default OrderDetails
