import React, { useState } from 'react'
import "../../Styles/New/login.css"
import { API } from '../../constants';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const login = async (Email, Password) => {
        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[10]}`, loginData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        } catch (error) {
            console.log("got error while hitting Login", error);
        }
    };

    return (
        <section className="login-page-section">
            <h1 className="logni-text">Login</h1>
            <div className="loging-page-div">
                <form action="" className="login-form">
                    <div className="login-form-div">
                        <input type="email" name="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} id="" placeholder="Email" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} name="password" id="" placeholder="Password" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <button className="form-submit-btn">Login</button>
                    </div>
                    <div className="login-form-div switch-options">
                        <p className="switch-options-p">
                            New User <span className="switch-options-p-span">register</span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
