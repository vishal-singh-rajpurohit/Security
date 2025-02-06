import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext.context'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../Functions/Auth/formSlice'


const Otp = () => {
  const dispatch = useDispatch()
  const { formError, setFormError, register } = useContext(AuthContext);
  const [OtpTemp, setOtpTemp] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (!OtpTemp) {
      setErrorMessage("Otp Must Required");
      setFormError(true)
      console.log("Provide Otp");
    }
    else {
      setErrorMessage('');
      setFormError(false);

      dispatch(setOtp({
        otp: OtpTemp
      }));

      await register(Number(OtpTemp));

    }
  }

  useEffect(()=>{
    console.log("temp otp is :", OtpTemp, typeof OtpTemp);
    
  }, [OtpTemp])

  return (
    <main className="signpu-page">
      <div className="signup-card otp-card-2">
        <div className="input-otp">
          <input type="number" placeholder='000000' onChange={(e)=>setOtpTemp(e.target.value)} className="inp-otp" />
        </div>
        <div className="input-otp">
          <button className='submit-otp login-button' onClick={()=>handleSubmit()}>Submit</button>
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

export default Otp