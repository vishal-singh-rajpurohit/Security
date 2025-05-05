import React from 'react'
import "../../Styles/New/login.css"

const ResatPassword = () => {
  return (
    <section className="login-page-section">
        <h1 className="logni-text">Reset Password</h1>
        <div className="loging-page-div">
            <form action="" className="login-form">
                <div className="login-form-div">
                    <input type="password" name="password" id="" placeholder="New Password" className="login-form-input" />
                </div>
                <div className="login-form-div">
                    <input type="password" name="password" id="" placeholder="Conform Password" className="login-form-input" />
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
