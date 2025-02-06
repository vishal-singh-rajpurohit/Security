import React, { useContext, useState } from 'react'
import '../../../Styles/signup.css'
import AuthContext from '../../../context/AuthContext.context'
import r from '../../../Assets/camera/singledome.png'
import { useSelector } from 'react-redux'

const ConformOrder = () => {
    const { openConform, setOpenConform, product, setFormError } = useContext(AuthContext)
    const { placeOrder } = useContext(AuthContext)
    const isSubmitError = useSelector((state) => state.modals.OpenWarning);
    const [errorMessage, setErrorMessage] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [reffralCode, setReffralCode] = useState('');
    const [pinCode, setPinCode] = useState(0);
    const [mobileNumber, setMobileNumber] = useState(0);


    const handleSubmit = async () => {
        if (!city || !state || !address || !pinCode || !mobileNumber) {
            setErrorMessage("all data required for order conform")
            setFormError(true)
        } else {
            setFormError(false)
            await placeOrder(product._id, address, city, state, reffralCode, pinCode, mobileNumber)
        }
    }


    return (
        <section class="signup-main" style={{ display: openConform ? 'flex' : 'none', zIndex: 99 }}>
            <div class="signup-main-2">
                <div class="left-singup">
                    <div class="left-whole" style={{ backgroundImage: `url(${r})` }}></div>
                </div>
                <div class="left-right">
                    <div class="singup-top-text">
                        <p class="create-signup-text">Confrom order</p>
                    </div>
                    <div class="signup-input-double">
                        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" class="signup-dbl-input" />
                        <input type="text" onChange={(e) => setState(e.target.value)} placeholder="State" class="signup-dbl-input" />
                    </div>
                    <div class="signup-input-double">
                        <input type="number" onChange={(e) => setPinCode(e.target.value)} placeholder="Pin Code" class="signup-single-input" />
                        <input type="text" onChange={(e) => setReffralCode(e.target.value)} placeholder="refferal code" class="signup-dbl-input" />
                    </div>
                    <div class="signup-input-single">
                        <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Address" class="signup-single-input" />
                    </div>
                    <div class="signup-input-single">
                        <input type="number" onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" class="signup-single-input" />
                    </div>
                    <div class="agree-you" style={{ display: isSubmitError ? 'flex' : 'none' }}>
                        <label className="agree-error"> {errorMessage} </label>
                    </div>
                    <div class="signup-input-single">
                        <button type="submit" onClick={handleSubmit} class="input-full-signup">Submit</button>
                    </div>
                    <div class="signup-input-single">
                        <button type="submit" class="input-full-signup" onClick={() => { setOpenConform(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConformOrder