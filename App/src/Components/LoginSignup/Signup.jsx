import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.context';
import { useDispatch, useSelector } from 'react-redux';
import { setFormStates } from '../../Functions/Auth/formSlice';

const Signup = () => {
    const dispatch = useDispatch();
    const { tempUserType, setTempUserType, setFormError, sendRegistrationOtp } = useContext(AuthContext);
    const isSubmitError = useSelector((state) => state.modals.OpenWarning);
    const [errorMessage, setErrorMessage] = useState('');
    const [image, setImage] = useState(null);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [MobileNumber, setMobileNumber] = useState();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConformPassword, setConformPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (tempUserType !== 'CUSTOMER' && !image) {
            setErrorMessage("Avatar Imgae Require");
            setFormError(true)
        }
        else if (FirstName.length === 0 || LastName.length === 0) {
            console.log("name eror", isSubmitError)
            setErrorMessage("FirstName and LastName must require");
            setFormError(true)
        }
        else if (!MobileNumber && Email.length === 0) {
            setErrorMessage("Mobile Number and Email Must Required")
            setFormError(true)
        }
        else if (Password.length < 8) {
            setErrorMessage("Use More then 8 characters");
            setFormError(true)
        }
        else if (Password !== ConformPassword) {
            setErrorMessage("Password is not matching");
            setFormError(true)
        }
        else {
            setErrorMessage('');
            setFormError(false)
            dispatch(setFormStates({
                image,
                FirstName,
                LastName,
                Email,
                MobileNumber,
                Password,
                ConformPassword
            }));
            
            await sendRegistrationOtp();
        }
    }

    return (
        <main className='signpu-page'>
            <div className="signup-card">

                <div className="signup-text">
                    <div className="txt-signup">
                        <p className="signup-text">Create An Account</p>
                    </div>
                </div>
                <div className="signup">
                    <form className="signpu-form" onSubmit={handleSubmit}>
                        <div className="user-Avatat"
                            style={{ display: tempUserType === "CUSTOMER" ? 'none' : "flex" }}
                        >
                            <div className="-image-input">
                                <label htmlFor="avatar" className="signup-laber">Enter Your Avatar</label>
                                <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} name='image' />
                            </div>
                        </div>
                        <div className="small-parts small-parts2">
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mail" className="signup-laber2">Enter Your First Name</label>
                                <input type="text" name='FirstName' onChange={(e) => setFirstName(e.target.value)} placeholder='Elon' className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mail" className="signup-laber2">Enter Your Last Name</label>
                                <input type="text" name='LastName' onChange={(e) => setLastName(e.target.value)} placeholder='Elon' className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mail" className="signup-laber2">Enter Your Mobile Number</label>
                                <input type="number" name='MobileNumber' onChange={(e) => setMobileNumber(e.target.value)} placeholder='Elon' className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="mail" className="signup-laber2">Enter Your Email Address</label>
                                <input type="email" name='Email' onChange={(e) => setEmail(e.target.value)} placeholder='Elon' className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="password" className="signup-laber2">Enter A Your Password</label>
                                <input type="password" name='Password' onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' placeholder='Your Password' className="small-texts" />
                            </div>
                            <div className="signup-input-sections signup-input-sections2">
                                <label htmlFor="password" className="signup-laber2">Re-enter Password</label>
                                <input type="text" name='ConformPassword' onChange={(e) => setConformPassword(e.target.value)} placeholder='Conform Your Password' className="small-texts" />
                            </div>
                        </div>
                        <div className="warning-dialouge-box" style={{ display: isSubmitError ? 'flex' : 'none' }}>
                            <div className="dalouge-div">
                                <p className="warn">{errorMessage}</p>
                            </div>
                        </div>
                        <div className="warning-dialouge-box">
                            <div className="dalouge-div">
                                <p className="policy text">
                                    By continuing, you agree to Data Secourity's
                                    <a  className='policy-link'> Conditions of Use</a> and
                                    <a className='policy-link'>Privacy Notice</a>
                                    .</p>
                            </div>
                        </div>
                        <div className="submit-area">
                            <div className="submit-button-div">
                                <input type="submit" className='login-button' value="SignUp" />
                            </div>
                        </div>
                        <div className="create-account">
                            <div className="message">
                                <span className="msg">
                                    already have account?
                                    <NavLink to={"/user/login"} ><span className="login-text">Log In</span></NavLink>

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
                                    <p className="signup-links" onClick={(e) => setTempUserType("INSTALLER")}>Earn With Us</p>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Signup