import React, { useContext, useState } from 'react'
import '../../Styles/signup.css'
import AuthContext from '../../context/AuthContext.context'
import { useDispatch, useSelector } from 'react-redux'
// import {setFormLoginStates} from '../../Functions/Auth/formSlice'

const LoginModal = () => {
    const { openSignup, setOpenSignup, openLogin, setOpenLogin } = useContext(AuthContext)
    const { login } = useContext(AuthContext)
    const [agreeCnd, setAgreeCnd] = useState(false);

    const dispatch = useDispatch();
    
    const {setTempUserType, setFormError, sendLoginOtp } = useContext(AuthContext);
    const isSubmitError = useSelector((state) => state.modals.OpenWarning);
    const [errorMessage, setErrorMessage] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [otp, setOtp] = useState(0)


    const handleSubmit = async () => {
        if(!agreeCnd){
            setErrorMessage("allow the terms and conditions")
            setFormError(true)
        }
        else if (Email.length === 0) {
            setErrorMessage("Email and Password Required")
            setFormError(true)
        }
        else if (Password.length < 8) {
            setErrorMessage("Enter a Valid Password");
            setFormError(true)
        }
        else {
            setErrorMessage('');
            setFormError(false)
           await sendLoginOtp(Email , Password);
        }
    }
    const handleLogin = async() =>{
        if(!otp){
            setErrorMessage("Enter the Otp Sent");
            setFormError(true)
        }else{
            setFormError(false)
            await login(otp, Email, Password);
        }
    }


    return (
        <section class="signup-main" style={{ display: openLogin ? 'flex' : 'none' }}>
            <div class="signup-main-2">
                <div class="left-singup">
                    <div class="left-whole"></div>
                </div>
                <div class="left-right">
                    <div class="singup-top-text">
                        <p class="create-signup-text">Login </p>
                        <p class="second-signup-text">
                            Create an Account? <span class="login-txt"
                            onClick={()=>{
                                setOpenLogin(false)
                                setOpenSignup(true)
                              }}>Sign up</span>
                        </p>
                    </div>
                    <div class="signup-input-single">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" class="signup-single-input"/>
                    </div>
                    <div class="signup-input-single">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            class="signup-single-input"/>
                    </div>
                    <div class="agree-you">
                        <input type="checkbox" id="agree-1" class="agree-cb" onChange={()=>{
                            setAgreeCnd(!agreeCnd)
                        }} />
                        <label for="agree-1">I agree to the <span class="t-and-c">terms & conditions</span></label>
                    </div>
                    <div class="agree-you" style={{display: isSubmitError?'flex' : 'none'}}>
                        <label className="agree-error"> {errorMessage}</label>
                    </div>
                    <div class="signup-input-single">
                        <button disabled={!agreeCnd} type="submit" class="input-full-signup" onClick={()=>handleSubmit()}>send otp</button>
                    </div>
                    <div class="signup-input-single">
                        <input
                            type="number"
                            placeholder="OTP"
                            class="signup-single-input"
                            onChange={(e)=>setOtp(e.target.value)}
                        />
                    </div>
                    <div class="signup-input-single">
                        <button type="submit"
                        disabled={!agreeCnd} class="input-full-signup" onClick={handleLogin}>Login</button>
                    </div>
                    <div class="signup-input-single">
                        <button type="submit" class="input-full-signup" onClick={()=>{
                            setOpenLogin(false)
                            setOpenSignup(false)
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginModal