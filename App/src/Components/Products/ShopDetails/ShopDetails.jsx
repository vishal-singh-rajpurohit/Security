import React from 'react'
import './ShopDetails'
import '../../LoginSignup/signup.css'

const ShopDetails = () => {
    return (
        <main className="shop-details-page">
            <section className="signup-card">
                <div className="signup">
                    <form className="signpu-form">
                        <div className="submit-top-">
                            <h2 className="submit-text-form">
                                Submit Your Details To Place Order
                            </h2>
                        </div>
                        <div className="small-parts small-parts2">
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mobilenumber2" className='signup-laber2'>
                                    Give Second Mobile Number
                                </label>
                                <input type="number" name="MobileNumber2" placeholder='0880897656' id="mobilenumber2" className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <div className="submit-points-sub">
                                    <div className="submit-2">
                                        <label htmlFor="City" className='signup-laber2'>
                                            Your City
                                        </label>
                                        <input type="text" name="City" placeholder='Jodhpur' id="City" className="small-texts small-texts2" />
                                    </div>
                                    <div className="submit-2">
                                        <label htmlFor="PostCode" className='signup-laber2'>
                                            Your PostCode
                                        </label>
                                        <input type="number" name="City" placeholder='32002' id="PostCode" className="small-texts small-texts2" />
                                    </div>
                                </div>
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <div className="submit-2">
                                    <label htmlFor="Address1" className='signup-laber2'>
                                        Enter Address of Delivary
                                    </label>
                                    <textarea type="text" name="Address1" placeholder='56/78, 14thA Cross, 2nd Main, Garden Layout, JP Nagar 7th Phase' id="Address1" className="small-texts" />
                                </div>
                            </div>
                        </div>
                        <div className="warning-dialouge-box">
                            <div className="dalouge-div">
                                <p className="policy text">
                                    By continuing, you agree to Data Secourity's
                                    <a className="policy-link">
                                        {" "}
                                        Conditions of Use
                                    </a>{" "}
                                    and
                                    <a  className="policy-link">
                                        Privacy Notice
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="submit-area">
                            <input type="submit" className='login-button' value={"Submit"} />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default ShopDetails