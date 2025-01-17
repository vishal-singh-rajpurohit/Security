import React, { useContext, useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../context/AuthContext.context";
import { setFormLoginStates } from "../../Functions/Auth/formSlice";

const Login = () => {

    const dispatch = useDispatch();
    
    const {setTempUserType, setFormError, sendLoginOtp } = useContext(AuthContext);
    const isSubmitError = useSelector((state) => state.modals.OpenWarning);
    const [errorMessage, setErrorMessage] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
         if (Email.length === 0) {
            setErrorMessage("Mobile Number and Email Must Required")
            setFormError(true)
        }
        else if (Password.length < 8) {
            setErrorMessage("Use More then 8 characters");
            setFormError(true)
        }
        else {
            setErrorMessage('');
            setFormError(false)
            dispatch(setFormLoginStates({
                Email,
                Password,
            }))

           await sendLoginOtp();
        }
    }

    return (
        <main className="signpu-page">
            <div className="signup-card">
                <div className="signup-text">
                    <div className="txt-signup">
                        <p className="signup-text">Login to Enter the App</p>
                    </div>
                </div>
                <div className="signup">
                    <form className="signpu-form" onSubmit={handleSubmit}>
                        <div className="small-parts small-parts2">
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mail" className="signup-laber2">
                                    Enter Your Email Address
                                </label>
                                <input type="email" name="mail" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Elon" className="small-texts"
                                />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="password" className="signup-laber2">
                                    Enter A Your Password
                                </label>
                                <input type="password" name="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Elon" className="small-texts"
                                />
                            </div>
                        </div>
                        <div className="warning-dialouge-box">
                            <div className="dalouge-div">
                                <p className="policy text">
                                    By continuing, you agree to Data Secourity's
                                    <a href="" className="policy-link">
                                        {" "}
                                        Conditions of Use
                                    </a>{" "}
                                    and
                                    <a href="" className="policy-link">
                                        Privacy Notice
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="warning-dialouge-box" style={{ display: isSubmitError ? "flex" : "none" }}>
                            <div className="dalouge-div">
                                <p className="warn">{errorMessage}</p>
                            </div>
                        </div>
                        <div className="submit-area">
                            <div className="submit-button-div">
                                <input type="submit" className="login-button" value="Login" />
                            </div>
                        </div>
                        <div className="create-account">
                            <div className="message">
                                <span className="msg">
                                    do not have account?{" "}
                                    <NavLink to={"/user/register"}><span className="login-text">Signup In</span></NavLink>
                                </span>
                            </div>
                        </div>
                        <div className="signup-options">
                            <ul className="signup-ul">
                                <li className="signup-li">
                                    <p className="signup-li-text">Become A Dealer?</p>
                                    <p className="signup-links" onClick={(e) => setTempUserType("DEALER")} >Earn With Us</p>
                                </li>
                                <li className="signup-li">
                                    <p className="signup-li-text">Are You A Technician {"( Knowledge OF Camera Installation )"}?</p>
                                    <p className="signup-links" onClick={(e) => setTempUserType("INSTALLER")} >Earn With Us</p>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
