import React, { useContext, useState } from 'react'
import '../../Styles/signup.css'
import AuthContext from '../../context/AuthContext.context'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SignupModal = () => {
  const { openSignup, setOpenSignup, openLogin, setOpenLogin, register } = useContext(AuthContext);
  const { tempUserType, setTempUserType, setFormError, sendRegistrationOtp } = useContext(AuthContext);
  const isSubmitError = useSelector((state) => state.modals.OpenWarning);
  const [agreeCnd, setAgreeCnd] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [MobileNumber, setMobileNumber] = useState();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');
  const [otp, setOtp] = useState(0)

  const handleSubmit = async () => {
    if (FirstName.length === 0 || LastName.length === 0) {
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
      await sendRegistrationOtp(Email, Password);
    }
  }

  const handleSignup = async () => {
    if (otp === 0 || !otp) {
      setErrorMessage("Enter the Otp Sent");
      setFormError(true)
    } else {
      setFormError(false)
      await register(otp, FirstName, LastName, Email, Password, ConformPassword);
    }
  }

  return (
    <section class="signup-main" style={{ display: openSignup ? 'flex' : 'none' }}>
      <div class="signup-main-2">
        <div class="left-singup">
          <div class="left-whole"></div>
        </div>
        <div class="left-right">
          <div class="singup-top-text">
            <p class="create-signup-text">Create an Account</p>
            <p class="second-signup-text">
              Already have an account? <span class="login-txt" onClick={() => {
                setOpenLogin(true)
                setOpenSignup(false)
              }}>Log in</span>
            </p>
          </div>
          <div class="signup-input-double">
            <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} class="signup-dbl-input" />
            <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}class="signup-dbl-input" />
          </div>
          <div class="signup-input-single">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" class="signup-single-input" />
          </div>
          <div class="signup-input-single">
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" class="signup-single-input" />
          </div>
          <div class="signup-input-single">
            <input type="password" onChange={(e)=>setConformPassword(e.target.value)} placeholder="Conform Password" class="signup-single-input" />
          </div>
          <div class="agree-you">
            <input type="checkbox" onChange={(e) => { setAgreeCnd(e.target.checked) }} id="agree" class="agree-cb" />
            <label for="agree">I agree to the  <NavLink to={'terms'} ><span class="t-and-c" onClick={()=>setOpenSignup(false)}>terms & conditions</span></NavLink> </label>
          </div>
          <div class="agree-you" style={{ display: isSubmitError ? 'flex' : 'none' }}>
            <label className="agree-error"> {errorMessage} </label>
          </div>
          <div class="signup-input-single">
            <button disabled={!agreeCnd} type="submit" onClick={handleSubmit} class="input-full-signup">send otp</button>
          </div>
          <div class="signup-input-single">
            <input type="number" onChange={(e)=>setOtp(e.target.value)} placeholder="OTP" class="signup-single-input" />
          </div>
          <div class="signup-input-single">
            <button disabled={!agreeCnd} onClick={()=>handleSignup()} type="submit" class="input-full-signup">register</button>
          </div>
          <div class="signup-input-single">
            <button type="submit" class="input-full-signup"
              onClick={() => {
                setOpenLogin(false)
                setOpenSignup(false)
              }}>Close</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupModal