import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { API } from '../../constants'
import "../../Styles/auth/verify.css"
import axios from 'axios'
import { setVerified } from '../../App/functions/auth.slice'
import { useDispatch } from 'react-redux'



const VerifyPage = () => {
  const dispatch = useDispatch();


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const navigate = useNavigate();

  const handleVerifyEmail = async () => {
    try {
      await axios.post(`http://localhost:5000/api/v1/user/validate-user`, {
        token: token,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      dispatch(setVerified());

      navigate('/');

    } catch (error) {
      console.log("Error in verifying email", error);
    }
  }


  return (
    <section className="resat-section">
      <button className="verify-resat-email" onClick={handleVerifyEmail}>Verify</button>
    </section>
  )
}

export default VerifyPage
