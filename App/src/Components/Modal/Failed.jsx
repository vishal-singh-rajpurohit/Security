import React, { useContext } from 'react'
import { MdNearbyError } from "react-icons/md";
import '../../Styles/Failed.css'
import AuthContext from '../../context/AuthContext.context';

const Failed = () => {
    const {failedModal, setFailedModal} = useContext(AuthContext);

  return (
    <section className="failed-modal" style={{display: failedModal? 'flex': 'none'}}>
        <div className="failed-mid">
            <div className="mid-failed">
                <MdNearbyError />
            </div>
            <div className="error-messages">
                <p className="error-message">Something went wrong. Please check your email and password. If the issue persists, try again later.</p>
                <p className="error-message">Register: This might happen if a user with this email already exists.</p>
                <p className="error-message">Otp: Might be wrong otp.</p>
                <p className="error-accption">Somthing went wrong!.</p>
            </div>
            <div className="close">
                <button className="close" onClick={()=>setFailedModal(false)}>Close</button>
            </div>
        </div>
    </section>
  )
}

export default Failed