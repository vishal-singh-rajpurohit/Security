"use client"
import React, { useContext, useState } from 'react';
import axios from "axios";
import { MenuContext } from '../context/Contexts.context';

function Cform() {
    const { setStatus } = useContext(MenuContext);

    const [formData, setFormData] = useState({
        name: '',
        email: "",
        number: "",
        businessType: "",
        city: "",
        state: "",
        postcode: "",
        message: ""
    });

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        if (formData.number.length < 10) {
            console.log("error");
            setStatus('error');
        } else {
            try {
                await axios.post("/api/contact", formData, {
                    withCredentials: true
                });

                setFormData({
                    name: '',
                    email: "",
                    number: "",
                    businessType: "",
                    city: "",
                    state: "",
                    postcode: "",
                    message: ""
                });

                setStatus('success');
            } catch (error) {
                console.log("Error submit message: ", error);
                setStatus('error');
            }
        }
    };

    return (
        <form className="contact-form-form" onSubmit={handleSubmitForm}>
            <div className="form-single-div">
                <input type="text" name='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" className="form-single-inputs" />
            </div>
            <div className="form-double-div">
                <input type="email" name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email Id" className="form-double-inputs" />
                <input type="number" name='number' value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} placeholder="Mobile Number" className="form-double-inputs" />
            </div>
            <div className="form-double-div">
                <input type="text" name='businessType' value={formData.businessType} onChange={(e) => setFormData({ ...formData, businessType: e.target.value })} placeholder="Business Type" className="form-double-inputs" />
                <input type="text" name='city' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} placeholder="City / Town" className="form-double-inputs" />
            </div>
            <div className="form-double-div">
                <input type="text" name='state' value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} placeholder="State" className="form-double-inputs" />
                <input type="number" name='postcode' value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} placeholder="Post Code" className="form-double-inputs" />
            </div>
            <div className="form-single-div form-single-div-ta">
                <textarea name="message" id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="message" className="form-text-area"></textarea>
            </div>
            <div className="form-submit-div">
                <button type="submit" className="form-submit-btn">SUBMIT</button>
            </div>
        </form>
    );
}

export default Cform;
