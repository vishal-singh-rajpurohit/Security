import Image from "next/image";
import "@/Styles/main.css"
import "@/Styles/about.css"
import "@/Styles/categories.css"

import tp1 from "@/Assets/SlideImage/ts.jpg"
import tp2 from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"


// about1
import cam from "@/Assets/Products/singledome.png"
import { AboutSlide } from "@/components/slide/AboutSlide";
import Link from "next/link";
import OrderNow from "@/components/OrderNow";

export default function categories() {

    return (
        <section className="info-page-section">
            <div className="about-page-top">
                <AboutSlide img_sm={tp2} img_bg={tp1} />
                <div className="about-page-top-text">
                    <h1 className="but-h1">Categories</h1>
                    <p className="about-page-top-text-p">Reliable surveillance products for every need</p>
                </div>
            </div>
            <section className="categories-grid">
                <div className="categories-inner">
                    <Link href={"/categories/hd-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="HD CCTV Camera" />
                            <p className="categories-about-grid-card-text">HD CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/ip-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="IP CCTV Camera" />
                            <p className="categories-about-grid-card-text">IP CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/wifi-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Wifi CCTV Camera" />
                            <p className="categories-about-grid-card-text">Wifi CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/dome-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Dome CCTV Camera" />
                            <p className="categories-about-grid-card-text">Dome CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/ptz-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="PTZ CCTV Camera" />
                            <p className="categories-about-grid-card-text">PTZ CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/bullet-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Bullet CCTV Camera" />
                            <p className="categories-about-grid-card-text">Bullet CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/turret-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Turret CCTV Camera" />
                            <p className="categories-about-grid-card-text">Turret CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/c-mount-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="C-Mount CCTV Camera" />
                            <p className="categories-about-grid-card-text">C-Mount CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/infrared-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Infrared CCTV Camera" />
                            <p className="categories-about-grid-card-text">Infrared CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/wireless-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Wireless CCTV Camera" />
                            <p className="categories-about-grid-card-text">Wireless CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/4g-sim-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="4G SIM CCTV Camera" />
                            <p className="categories-about-grid-card-text">4G SIM CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/smart-ai-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Smart AI CCTV Camera" />
                            <p className="categories-about-grid-card-text">Smart AI CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/solar-powered-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Solar Powered CCTV Camera" />
                            <p className="categories-about-grid-card-text">Solar Powered CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/ptz-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="PTZ CCTV Camera" />
                            <p className="categories-about-grid-card-text">PTZ CCTV Camera</p>
                        </div>
                    </Link>
                    <Link href={"/categories/thermal-cctv-camera"}>
                        <div className="categories-about-grid-card">
                            <Image height={0} style={{ height: "auto" }} src={cam} alt="Thermal CCTV Camera" />
                            <p className="categories-about-grid-card-text">Thermal CCTV Camera</p>
                        </div>
                    </Link>
                </div>
            </section>
        </section>
    )
}


