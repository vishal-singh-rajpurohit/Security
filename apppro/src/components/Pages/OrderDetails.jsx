import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { AppContext } from "../../context/AppContext";
import { loaded, loading } from "../../App/functions/variable.slice";

import "../../Styles/OrderDetails.css"

const OrderDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setSuccess, setFail, setSuccessText } = useContext(AppContext)

    const [searchParams] = useSearchParams();
    const productId = searchParams.get('pid');

    const user = useSelector((state) => state.auth.user);

    const [orderDetails, setOrderDetails] = useState({
        phone: "",
        address: "",
        city: "",
        state: null,
        postCode: "",
    });

    const [prev, setPrev] = useState(false);

    async function order(e) {
        e.preventDefault();
        try {
            dispatch(loading());

            await axios.post(`http://localhost:5000/api/v2/auth/orders/place-order`,
                {
                    productId: productId,
                    mobileNumber: orderDetails.phone,
                    location: orderDetails.address,
                    pincode: orderDetails.postCode,
                    city: orderDetails.city,
                    state: orderDetails.state
                },
                {
                    withCredentials: true
                }
            );

            setSuccessText("Order submitted successfully");
            setSuccess(true);

            navigate(-1, { replace: true });
        } catch (error) {
            setFail(true)
            setSuccess(true);
            setSuccessText("Error in placing order");
            // console.log("Error while placing order: ", error);
        } finally {
            dispatch(loaded());
        }
    }

    function setPrevious() {
        if (prev) setOrderDetails({
            address: user?.address,
            city: user?.city,
            phone: user?.phone,
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
        setPrevious();
    }, [prev])

    return (
        <section className="order-detals-seciton">
            <div class="form-container">
                <h2>Order Details</h2>
                <form onSubmit={(e) => order(e)}>
                    <div class="form-group">
                        <label for="mobile">Mobile Number</label>
                        <input value={orderDetails.phone} onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })} type="tel" id="mobile" name="mobile" required />
                    </div>

                    <div class="form-group">
                        <label for="location">Location</label>
                        <input value={orderDetails.address} onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })} type="text" id="location" name="location" required />
                    </div>

                    <div class="form-group">
                        <label for="pincode">Pincode</label>
                        <input value={orderDetails.postCode} onChange={(e) => setOrderDetails({ ...orderDetails, postCode: e.target.value })} type="text" id="pincode" name="pincode" required />
                    </div>

                    <div class="form-group">
                        <label for="state">City</label>
                        <input value={orderDetails.city} onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })} type="text" id="city" name="City" required />
                    </div>

                    <div class="form-group">
                        <label for="state">State</label>
                        <input value={orderDetails.state} onChange={(e) => setOrderDetails({ ...orderDetails, state: e.target.value })} type="text" id="state" name="state" required />
                    </div>

                    <div class="checkbox-container">
                        <input onChange={(e) => setPrev(e.target.checked)} type="checkbox" id="usePrevious" name="usePrevious" />
                        <label for="usePrevious">Use previous address</label>
                    </div>

                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default OrderDetails
