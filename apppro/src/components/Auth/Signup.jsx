import React, { useContext, useState } from 'react'
import "../../Styles/auth/login.css"
import { API } from '../../constants';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { logingUser } from '../../App/functions/auth.slice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(AppContext)

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        conformPassword: ""
    });

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const responce = await axios
                .post(`http://localhost:5000/api/v1/user/register`, signupData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            setSignupData({
                name: "",
                email: "",
                password: "",
                conformPassword: ""
            });

            dispatch(logingUser({ user: responce.data.data.User }));

            navigate("/", { replace: true });

        } catch (error) {
            console.log("got error while hitting register ", error);
        }
    };

    return (
        <section className="login-page-section">
            <h1 className="logni-text">SignUp</h1>
            <div className="loging-page-div">
                <form action="" className="login-form" onSubmit={signUp}>
                    <div className="login-form-div">
                        <input type="text" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} name="fullname" id="" placeholder="Full Name" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} name="email" id="" placeholder="Email" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <input type="password" name="password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} id="" placeholder="Password" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <input type="password" name="password" value={signupData.conformPassword} onChange={(e) => setSignupData({ ...signupData, conformPassword: e.target.value })} id="" placeholder="Conform Password" className="login-form-input" />
                    </div>
                    <div className="login-form-div">
                        <button type='submit' className="form-submit-btn">Sign Up</button>
                    </div>
                    <div className="login-form-div switch-options">
                        <p className="switch-options-p">
                            Existing User <span className="switch-options-p-span">Log-in</span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Signup
