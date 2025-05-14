import {IoEyeOffOutline, IoEyeOutline }  from "react-icons/io5"
import "../../Styles/auth/login.css"
import { useState } from "react"

const ResatPassword = () => {

    const [show, setshow] = useState(false)

  return (
    <section className="login-page-section">
        <h1 className="logni-text">Reset Password</h1>
        <div className="loging-page-div">
            <form action="" className="login-form">
                <div className="login-form-div">
                    <input type={show? "text" :"password"} id="" placeholder="New Password" className="login-form-input" />
                </div>
                <div className="login-form-div">
                    <input type={show? "text" :"password"} name="password" id="" placeholder="Conform Password" className="login-form-input" />
                </div>
                <div className="login-form-div">
                    {
                        show? <IoEyeOutline className="eye-icon" onClick={() => setshow(!show)} /> : <IoEyeOffOutline className="eye-icon" onClick={() => setshow(!show)} />
                    }
                </div>
                <div className="login-form-div">
                    <button className="form-submit-btn">Reset</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ResatPassword
