import Image from "next/image";
import "@/Styles/main.css"
import "@/Styles/about.css"
import "@/Styles/solutions.css"

import tp1 from "@/Assets/SlideImage/ts.jpg"
import tp2 from "@/Assets/About_page/WIFI_CCTV_Camera_Connecte_directly_With_Mobile_phone_wireless_Camera.jpg"

import solt from "@/Assets/solutions/solt.webp"
import { AboutSlide } from "@/components/slide/AboutSlide";
import Link from "next/link";


export default function page() {

    return (
        <section className="info-page-section">
            <div className="about-page-top">
                <AboutSlide img_sm={tp2} img_bg={tp1} />
                <div className="about-page-top-text">
                    <h1 className="but-h1">Our Solutions</h1>
                    <p className="about-page-top-text-p">Comprehensive surveillance solutions for all applications</p>
                </div>
            </div>
            <section className="solution-text-div">
                <h2 className="solution-h2">Solution by Industries</h2>
            </section>
            <section className="solutions-grid">
                <div className="solutions-grid-div solutions-grid-div-scroll">
                    <Link href={'/categories/india'}>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div></Link>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                </div>
            </section>
            <section className="solution-text-div solution-text-div-2">
                <h2 className="solution-h2">Solution by Scenarios</h2>
            </section>
            <section className="solutions-grid">
                <div className="solutions-grid-div solutions-grid-div-secnario">
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                    <div className="solutions-grid-card-secnario">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <div className="solutions-grid-card-secnario-text">Wearhouse </div>
                    </div>
                </div>
            </section>
            <section className="solution-text-div">
                <h2 className="solution-h2">Solution by Functions</h2>
            </section>
            <section className="solutions-grid">
                <div className="solutions-grid-div solutions-grid-div-scroll">
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                    <div className="solutions-grid-card">
                        <Image height={0} style={{ height: "auto" }} src={solt} alt="" />
                        <p className="some-text">Oil and Gas Stations</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

