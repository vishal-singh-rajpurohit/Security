'use client'
import Image from "next/image";
import "@/Styles/main.css"
import "@/Styles/about.css"
import "@/Styles/contact.css"

import tp1 from "@/Assets/Stock/Security_camera_monitors.jpg"
import tp2 from "@/Assets/About_page/WIFI_CCTV_Camera_Connecte_directly_With_Mobile_phone_wireless_Camera.jpg"


// about1

import { useContext, useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";
import { MenuContext } from "@/context/Contexts.context";
import Head from "next/head";



export default function Contact() {

    const [width, setWidth] = useState(1500);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [])

    const { setStatusfunc } = useContext(MenuContext)
    const [formData, setFormData] = useState({
        name: '',
        email: "",
        number: 91,
        businessType: "",
        city: "",
        state: "",
        postcode: "",
        message: ""
    });


    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.number < 1000) {
            setStatusfunc('error')
        } else {
            console.log("formData.number < 1000", formData.number < 1000);

            try {
                await axios.post("/api/contact", formData, {
                    withCredentials: true
                });

                setFormData({
                    name: '',
                    email: "",
                    number: 91,
                    businessType: "",
                    city: "",
                    state: "",
                    postcode: "",
                    message: ""
                });

                setStatusfunc('success')

            } catch (error) {
                console.log("Error submit message: ", error)
                setStatusfunc('error')
            }
        }
    }

    return (
        <>
            <Head>
                <title>Contact Us | Sewad Infotech</title>
                <meta name="description" content="Learn about Sewad Infotech's mission to provide top-quality CCTV installation and security solutions in India." />
                <meta property="og:title" content="Contact Us | Sewad Infotech" />
                <meta property="og:description" content="Discover Sewad Infotech – a leader in CCTV security and smart surveillance." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.smartcitycare.in/contact" />
            </Head>
            <section className="contact-page">
                <div className="about-page-top">
                    <Image height={0} style={{ height: "auto" }} src={width >= 850 ? tp1 : tp2} alt="" />
                </div>
                <div className="landing-page-5-div">
                    <div className="landing-page-5-left">
                        <h2 className="text-h1">Contact us for Assistance</h2>
                        <div className="contact-options">
                            <div className="contact-options-item">
                                <div className="contact-op-logo">
                                    <FaTelegramPlane size={30} />
                                </div>
                                <div className="contact-op-div">
                                    <p className="contact-op-name">Mobile number</p>
                                    <p className="contact-value">+91 9509075612</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing-contact-form-card">
                        {/* <div className="landing-contact-card"> */}
                        <form className="contact-form-form" onSubmit={handleSubmitForm}>
                            <div className="form-single-div">
                                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-single-inputs" />
                            </div>
                            <div className="form-double-div">
                                <input type="email" placeholder="Email Id" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-double-inputs" />
                                <input type="number" value={formData.number} placeholder="Mobile Number" onChange={(e) => setFormData({ ...formData, number: Number(e.target.value) })} className="form-double-inputs" />
                            </div>
                            <div className="form-double-div">
                                <input type="text" placeholder="Business Type" value={formData.businessType} onChange={(e) => setFormData({ ...formData, businessType: e.target.value })} className="form-double-inputs" />
                                <input type="text" placeholder="City / Town" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="form-double-inputs" />
                            </div>
                            <div className="form-double-div">
                                <input type="text" placeholder="State" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="form-double-inputs" />
                                <input type="number" placeholder="Post Code" value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} className="form-double-inputs" />
                            </div>
                            <div className="form-single-div form-single-div-ta">
                                <textarea name="" id="" placeholder="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-text-area"></textarea>
                            </div>
                            <div className="form-submit-div">
                                <button type="submit" className="form-submit-btn">SUBMIT</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
        </>
    )
}