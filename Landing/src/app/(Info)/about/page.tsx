import Image from "next/image";
import Head from "next/head";

import { FaRegCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { BsBrightnessAltHigh } from "react-icons/bs";
import { LuCctv } from "react-icons/lu";

import "@/Styles/main.css"
import "@/Styles/about.css"


// Hero section images
import hero_section_image_desktop from "@/Assets/SlideImage/ts.jpg"
import hero_section_image_mobile from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"

// Collage Images
import CCTV_Camera_NV from "@/Assets/About_page/CCTV_camera_for_Night_Vision.jpg"
import CCTV_Camera_Outdoor from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"
import CCTV_Camera_for_Streets from "@/Assets/About_page/CCTV_Camera_in_Outdoor_streets.jpg"
import CCTV_Camera_for_Parks_trees from "@/Assets/About_page/CCTV-Camera_for_paks_and_forests.jpg"

import CCTV_Camera_in_road_with_text_I_See_you from "@/Assets/About_page/CCTV_Camera_in_road_with_text_I_See_you.jpg";

import WIFI_CCTV_Camera_Connected_directly_With_Mobile_phone_wireless_Camera from "@/Assets/About_page/WIFI_CCTV_Camera_Connecte_directly_With_Mobile_phone_wireless_Camera.jpg";



import { AboutSlide } from "@/components/slide/AboutSlide";



export default function About() {

    return (
        <>
            <Head>
                <title>About Us | Sewad Infotech</title>
                <meta name="description" content="Learn about Sewad Infotech's mission to provide top-quality CCTV installation and security solutions in India." />
                <meta property="og:title" content="About Us | Sewad Infotech" />
                <meta property="og:description" content="Discover Sewad Infotech – a leader in CCTV security and smart surveillance." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.smartcitycare.in/about" />
            </Head>
            <section className="info-page-section">
                <div className="about-page-top">
                    <AboutSlide img_sm={hero_section_image_mobile} img_bg={hero_section_image_desktop} />
                    <div className="about-page-top-text">
                        <h1 className="but-h1">About Us</h1>
                        <p className="about-page-top-text-p">Reliable CCTV solutions for trusted security and protection</p>
                    </div>
                </div>
                <section className="landing-page-1 about-page-section-2">
                    <div className="loanding-page-1-imgae-div section-2-page-left">
                        <Image height={0} style={{ height: "auto" }} src={CCTV_Camera_NV} alt="CCTV Camera Night Vision." />
                        <Image height={0} style={{ height: "auto" }} src={CCTV_Camera_for_Parks_trees} alt="CCTV Camera for Parks, streets and Trees best for outdoor." />
                        <Image height={0} style={{ height: "auto" }} src={CCTV_Camera_Outdoor} alt="CCTV Camera for Long Distance." />
                        <Image height={0} style={{ height: "auto" }} src={CCTV_Camera_for_Streets} alt="CCTV Camera for traffic signals and streets." />
                    </div>
                    <div className="text-div section-2-page-right">
                        <h2 className="text-h1 about-h2">Welcome To Wings Lens</h2>
                        <p className="text-p about-text-p">We are pioneering leaders in advanced surveillance solutions designed to elevate security across diverse environments. Our commitment to excellence drives us to deliver cutting-edge technologies that ensure safety, efficiency, and peace of mind for our clients. With a comprehensive portfolio that includes state-of-the-art CCTV systems, intelligent video analytics, and integrated management software, we empower businesses and institutions to protect their assets and enhance operational effectiveness.</p>
                        <div className="section-2-features">
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk"><FaRegCircle /></div>
                                <p className="section-2-item-name">Smart Doorbell Camera</p>
                            </div>
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk" ><FaRegCircle /></div>
                                <p className="section-2-item-name">Smart Home Security</p>
                            </div>
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk" ><FaRegCircle /></div>
                                <p className="section-2-item-name">Smart Wifi Cameras</p>
                            </div>
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk" ><FaRegCircle /></div>
                                <p className="section-2-item-name">Smart HomeSecurity</p>
                            </div>
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk" ><FaRegCircle /></div>
                                <p className="section-2-item-name">Night Vision Cameras</p>
                            </div>
                            <div className="section-2-features-item">
                                <div className="section-2-list-disk" ><FaRegCircle /></div>
                                <p className="section-2-item-name">High Quality Video </p>
                            </div>
                            <div className="about-page-section-2-button">
                                <button className="about-page-section-2-button-btn">VIEW PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-3-missons">
                    <div className="section-2-mission-txt">
                        <div className="section-2-mission-image">
                            <GoGoal size={30} />
                        </div>
                        <h3 className="section-2-h3">Our Missions</h3>
                        <p className="text-p-3">
                           At Wings Lens, our mission is to create secure and safe environments that empower individuals and organizations to thrive. We are dedicated to providing innovative surveillance solutions that not only protect assets but also foster peace of mind. Through cutting-edge technology and unwavering commitment, we aim to enhance safety and security for all, ensuring a resilient future for our communitie
                        </p>
                    </div>
                    <div className="section-2-mission-image-div">
                        <Image height={0} style={{ height: "auto" }} src={CCTV_Camera_in_road_with_text_I_See_you} alt="CCTV Camera in road with text I See you" />
                    </div>
                </section>
                <section className="landing-page-1 about-landing-1">
                    <div className="text-div td-3">
                        <h1 className="text-h1 about-h2">Our Core Business</h1>
                        <p className="text-p about-text-p">Wings Lens's core business centers around providing advanced surveillance and security solutions tailored to various environments, including commercial, educational, and public sectors. This includes the development and distribution of state-of-the-art CCTV systems, intelligent video analytics, and integrated management software. Their primary focus is on creating safe and secure spaces through innovative technology, ensuring peace of mind and operational efficiency for their clients.</p>
                    </div>
                    <div className="loanding-page-1-imgae-div li3">
                        <Image src={WIFI_CCTV_Camera_Connected_directly_With_Mobile_phone_wireless_Camera} height={0} style={{ height: 'auto' }} alt="WIFI CCTV Camera Connected directly With Mobile phone wireless Camera" className="loanding-page-1-imgae-div-img" />
                    </div>
                </section>
                <section className="landing-4-slutions-sm-card-grid">
                    <div className="landing-4-slutions-sm-card-grid-div">
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">HD Camera</h4>
                            <p className="-slutions-sm-card-text">A high-definition surveillance camera provides crystal-clear video for enhanced security monitoring.</p>
                        </div>
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">Wifi Camera</h4>
                            <p className="-slutions-sm-card-text">A Quality surveillance wifi camera with mobile integration for remote monitoring and controll.</p>
                        </div>
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">IP Camera</h4>
                            <p className="-slutions-sm-card-text">A IP surveillance camera provides best video quality for enhanced security monitoring.</p>
                        </div>
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">Smart AI Camera</h4>
                            <p className="-slutions-sm-card-text">A Quality surveillance camera provides AI enhancement for more security.</p>
                        </div>
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">Interactive Display</h4>
                            <p className="-slutions-sm-card-text">Touch-enables display with realtime interaction, controll and monitoring system.</p>
                        </div>
                        <div className="-slutions-sm-card ">
                            <div className="-slutions-sm-card-img">
                                <LuCctv size={30} />
                            </div>
                            <h4 className="-slutions-sm-card-h4">4G / 5G Routers</h4>
                            <p className="-slutions-sm-card-text">Super Fast true 4G and 5G wifi routers, in best price range.</p>
                        </div>
                    </div>
                </section>
                <section className="landing-page-1 about-landing-1" style={{ backgroundColor: "white" }}>
                    <div className="text-div td-3">
                        <h1 className="text-h1 about-h2">Always Focus On Perfection</h1>
                        <p className="text-p about-text-p">Sewad Infotech prioritizes quality by committing to excellence in all aspects of its operations. Leveraging advanced technology and rigorous testing, the company ensures that its products ranging from state of the art CCTV systems to integrated management software meet the highest industry standards.</p>
                    </div>
                    <div className="loanding-page-1-imgae-div li4">
                        <Image src={CCTV_Camera_NV} height={0} style={{ height: 'auto' }} alt="CCTV Camera in Shopping mall" />
                        <Image src={CCTV_Camera_Outdoor} height={0} style={{ height: 'auto' }} alt="CCTV Camera on Railwey Station" />
                    </div>
                </section>
                <section className="landing-page-1 about-landing-1">
                    <div className="text-div td-3">
                        <h1 className="text-h1 about-h2">Complete IT Solution for Grow your Business</h1>
                        <p className="text-p about-text-p">Wings Lens's core business centers around providing advanced surveillance and security solutions tailored to various environments, including commercial, educational, and public sectors. This includes the development and distribution of state-of-the-art CCTV systems, intelligent video analytics, and integrated management software. Their primary focus is on creating safe and secure spaces through innovative technology, ensuring peace of mind and operational efficiency for their clients.</p>
                    </div>
                    <div className="loanding-page-1-imgae-div li3">
                        <Image src={CCTV_Camera_for_Streets} height={0} style={{ height: 'auto' }} alt="" className="loanding-page-1-imgae-div-img" />
                    </div>
                </section>
            </section>
        </>
    );
}