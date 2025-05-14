import React, { useEffect, useState } from 'react'
import "../../Styles/auth/login.css"
import { API } from '../../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logingUser } from '../../App/functions/auth.slice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios
                .post(`http://localhost:5000/api/v2/user/login`, loginData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            setLoginData({
                email: "",
                password: "",
            });

            dispatch(logingUser({ user: response.data.data.User }));

            navigate("/", { replace: true });
        } catch (error) {
            console.log("got error while hitting Login", error);
        }
    };


    return (
        <section className="login-page-section">
            <h1 className="logni-text">Login</h1>
            <div className="loging-page-div">
                <form onSubmit={login} className="login-form">
                    <div className="login-form-div">
                        <input type="email" name="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} id="" placeholder="Email" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} name="password" id="" placeholder="Password" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <button type='submit' className="form-submit-btn">Login</button>
                    </div>
                    <div className="login-form-div switch-options">
                        <p className="switch-options-p">
                            New User <span className="switch-options-p-span">
                                <NavLink to="/signup" className="switch-options-p-span">Register</NavLink>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
