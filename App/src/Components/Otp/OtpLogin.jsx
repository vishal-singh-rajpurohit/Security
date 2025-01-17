import React, { useContext, useState } from 'react'
import '../LoginSignup/signup.css'
import './otp.css'
import AuthContext from '../../context/AuthContext.context'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../Functions/Auth/formSlice'


const OtpLogin = () => {
  const dispatch = useDispatch()
  const { formError, setFormError, login } = useContext(AuthContext);
  const [OtpTemp, setOtpTemp] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (!OtpTemp) {
      setErrorMessage("Otp Must Required");
      setFormError(true);
    }
    else {
      setErrorMessage('');
      setFormError(false);

      dispatch(setOtp({
        Otp: OtpTemp
      }));
      
      await login(OtpTemp);
      console.log("Logged in successfully");

    }
  }

  return (
    <main className="signpu-page">
      <div className="signup-card otp-card-2">
        <div className="input-otp">
          <input type="number" onChange={(e)=>setOtpTemp(e.target.value)} placeholder='000000' className="inp-otp" />
        </div>
        <div className="input-otp">
          <input type="submit" className='submit-otp login-button' onClick={handleSubmit} value="Submit" />
        </div>
        <div className="warning-dialouge-box" style={{ display: formError ? 'flex' : 'none' }}>
          <div className="dalouge-div">
            <p className="warn">{errorMessage}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OtpLogin