import "@/Styles/main.css"
import "@/Styles/about.css"
import "@/Styles/itsolutions.css"

import tp1 from "@/Assets/It-solutions/hero-section-image.jpg"
import tp2 from "@/Assets/It-solutions/hero-section-image.jpg"


import analysis_image from "@/Assets/icons/analysis.webp"
import plane_image from "@/Assets/icons/plan.webp"
import code_image from "@/Assets/icons/code.webp"
import dispatch_image from "@/Assets/icons/disp.webp"

import business_woman from "@/Assets/Stock/business_women.png"

import { AboutSlide } from "@/components/slide/AboutSlide"
import Image from "next/image"


export default function page() {

    return (
        <section className="info-page-section">
            <div className="about-page-top">
                <AboutSlide img_sm={tp2} img_bg={tp1} />
                <div className="about-page-top-text about-page-top-text-2">
                    <h1 className="it-solutions-h1">We code your <div></div><span className="it-sol-h1-span">Dream</span> to <div></div><span className="it-sol-h1-span-2">Reality</span></h1>
                    <p className="it-soutions-page-top-text-p">Grow your <span className="it-sol-txt-span-1">Business</span> with Web</p>
                </div>
            </div>
            {/* <section className="process">
                <div className="process-div">
                    <div className="step">
                        <Image src={analysis_image} loading="lazy" alt="Analysis Icon" height={70} />
                        <h3>ANALYSIS</h3>
                        <p>We don’t just go about designing a website, without proper analysis. On receipt of order, we do a proper research and analysis of your business.</p>
                    </div>
                    <div className="step">
                        <Image src={plane_image} loading="lazy" alt="Planning Icon" height={70} />
                        <h3>PLANNING</h3>
                        <p>A lot of planning then goes into the design including the template, the background images and the placeholders in the menu.</p>
                    </div>
                    <div className="step">
                        <Image src={code_image} loading="lazy" alt="Develop Icon" height={70} />
                        <h3>DEVELOP</h3>
                        <p>An analysis of the likely visitors to the site and the nature of business is done before finalizing the website design.</p>
                    </div>
                    <div className="step">
                        <Image src={dispatch_image} loading="lazy" alt="Dispatch Icon" height={70} />
                        <h3>DISPATCH</h3>
                        <p>After taking the clients into confidence, by presenting with various options with regard to the design, the finalized website is made Live.</p>
                    </div>
                </div>
            </section>
            <section className="process">
                <div className="container-why">
                    <section className="header-section-why">
                        <div className="text-content">
                            <h1 className="why-h1">
                                <span className="why">
                                    WHY CHOOSE US
                                </span>
                            </h1>
                            <p className="why-p">
                                In today's fast-paced digital world, standing out is everything. While we won’t promise
                                overnight miracles, we do promise dedication, strategy, and results that speak for
                                themselves. At <strong>Wings Lens</strong>, we don’t deal in false hopes — only smart,
                                sustainable success. Let’s build something remarkable together.
                            </p>
                        </div>
                        <section className="features">
                            <div className="card">
                                <h3 className="it-sol-h3">INNOVATIVE DESIGN</h3>
                                <p className="it-sol-p">
                                    Our creative team blends artistic vision with modern trends to craft stunning, intuitive
                                    websites that leave lasting impressions. From graphics to layout — every detail is
                                    designed to captivate and convert.
                                </p>
                            </div>
                            <div className="card">
                                <h3 className="it-sol-h3">USER-CENTRIC EXPERIENCE</h3>
                                <p className="it-sol-p">
                                    Seamless navigation, clean interfaces, and smart content placement — our websites are
                                    built for users first. Optimized for mobile and web, every click feels natural and every
                                    visit meaningful.
                                </p>
                            </div>
                            <div className="card">
                                <h3 className="it-sol-h3">ALIGN WITH YOUR VISION</h3>
                                <p className="it-sol-p">
                                    Your business has a unique story. We help bring that vision to life online with digital
                                    solutions that reflect your goals, values, and ambitions — turning ideas into impact.
                                </p>
                            </div>
                            <div className="card">
                                <h3 className="it-sol-h3">VALUE THAT DELIVERS</h3>
                                <p className="it-sol-p">
                                    We believe great design and functionality shouldn't break the bank. Our solutions are
                                    tailored to your budget, delivering premium quality at competitive rates — no compromise.
                                </p>
                            </div>
                        </section>
                    </section>
                    <section className="img-left">
                        <Image src={business_woman} className="business-img" alt="Business Woman" width={500} height={700} />
                    </section>
                </div>
            </section> */}
            <section className="process">
                <section className="it-solutions-packages">
                    <div className="it-solutions-card">
                        <div className="it-solution-card-image">
                            <Image src={analysis_image} loading="lazy" alt="Analysis Icon" height={70} />
                        </div>
                        <div className="it-solution-card-content">
                            <h3 className="card-heading">Basic Landing Page</h3>
                            <p className="it-sol-p">
                                OuWe don’t just go about designing a website, without proper analysis. On receipt of order, we do a proper research and analysis of your business.
                            </p>
                            <h5 className="it-sol-h5">Features & Service</h5>
                            <ul className="it-solutions-ul">
                                <li className="it-solutions-li">Pages: Describe your business online.</li>
                                <li className="it-solutions-li">Contact: One contact form.</li>
                                <li className="it-solutions-li">Price: ₹10000 - ₹20000</li>
                                <li className="it-solutions-li">Delivery: 5 to 10 Days</li>
                                <li className="it-solutions-li">Domain: your preferrence</li>
                                <li className="it-solutions-li">Service: 1 Months Free</li>
                            </ul>
                            <button className="appoint-button">appoint for free</button>
                        </div>
                        <div className="it-solution-card-content">
                            <h3 className="card-heading">Basic Landing Page</h3>
                            <p className="it-sol-p">
                                OuWe don’t just go about designing a website, without proper analysis. On receipt of order, we do a proper research and analysis of your business.
                            </p>
                            <h5 className="it-sol-h5">Features & Service</h5>
                            <ul className="it-solutions-ul">
                                <li className="it-solutions-li">Pages: Describe your business online.</li>
                                <li className="it-solutions-li">Contact: One contact form.</li>
                                <li className="it-solutions-li">Price: ₹10000 - ₹20000</li>
                                <li className="it-solutions-li">Delivery: 5 to 10 Days</li>
                                <li className="it-solutions-li">Domain: your preferrence</li>
                                <li className="it-solutions-li">Service: 1 Months Free</li>
                            </ul>
                            <button className="appoint-button">appoint for free</button>
                        </div>
                        <div className="it-solution-card-content">
                            <h3 className="card-heading">Basic Landing Page</h3>
                            <p className="it-sol-p">
                                OuWe don’t just go about designing a website, without proper analysis. On receipt of order, we do a proper research and analysis of your business.
                            </p>
                            <h5 className="it-sol-h5">Features & Service</h5>
                            <ul className="it-solutions-ul">
                                <li className="it-solutions-li">Pages: Describe your business online.</li>
                                <li className="it-solutions-li">Contact: One contact form.</li>
                                <li className="it-solutions-li">Price: ₹10000 - ₹20000</li>
                                <li className="it-solutions-li">Delivery: 5 to 10 Days</li>
                                <li className="it-solutions-li">Domain: your preferrence</li>
                                <li className="it-solutions-li">Service: 1 Months Free</li>
                            </ul>
                            <button className="appoint-button">appoint for free</button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

