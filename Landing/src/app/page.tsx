import Slide from "@/components/slide/Slide";
import Image from "next/image";
import Head from "next/head";
import "@/Styles/main.css"

import img1 from '@/Assets/Stock/Security_camera_monitors.jpg'

import slo1 from "@/Assets/solutions/Hospitals_survillance.jpg"
import slo2 from "@/Assets/solutions/Eduction_sector.jpg"
import slo3 from "@/Assets/solutions/Outdoor_CCTV_Camera.jpg"
import slo4 from "@/Assets/solutions/CCTV_for_your_workplace.jpg"

import psld1 from "@/Assets/SlideImage/ProductSlider/psld1.png"
import psld2 from "@/Assets/SlideImage/ProductSlider/psld2.png"

// Products and categories
import wifi_cctv from "@/Assets/Categories/wifi_cctv_camera.png"
import bullet_cctv from "@/Assets/Categories/bullet_camer.jpg"
import dome_cctv from "@/Assets/Categories/dome_cctv_camer.jpg"

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import { SiComma } from "react-icons/si";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Cform from "@/components/Cform";

import {productsSchema} from "@/seo/schema/JOSN-LD";
import {breadcrumbSchema} from "@/seo/schema/PRODUCT-LD";


export default function Home() {
  return (
    <>
      <Head >
        <title >Sewad Infotech | Best CCTV Solutions in Your City</title>
        <meta name="description" content="Ensure safety with our perfect CCTV camera Setups with installation services in India. Expert installation, repair, and maintenance services near you. Get a free quote" />

        <meta property="og:description" content="Ensure safety with our perfect CCTV camera Setups with installation services in India near you. Expert installation, repair, and maintenance services for all occations near you. Get a free quote" />
        <meta property="og:title" content="Sewad Infotech | Best CCTV Solutions at Your Place" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="" />
        <meta name="og:url" content="http://localhost:3000" />
        <meta name="og:locale" content="en_IN"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image:type" content="image/jpeg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema)
        }}></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}></script>
      </Head>

      <section className="home-section-page">
        <Slide />
        <section className="landing-page-1">
          <div className="text-div">
            <h1 className="text-h1">CCTV camera installaion and services</h1>
            <p className="text-p">Complete CCTV solution with best services.</p>
          </div>
          <div className="loanding-page-1-imgae-div">
            <Image src={img1} height={0} style={{ height: 'auto' }} alt="CCTV camera installaion and services" className="loanding-page-1-imgae-div-img" loading="lazy" />
          </div>
        </section>
        <section className="landing-page-2">
          <div className="solutions-text">
            <h2 className="solutions-text-h2">Our Solutions</h2>
            <div className="solutions-buttons">
              <p className="solutions-text-p">CCTV Solutions for every work place.</p>
              <div className="solutions-btn-box">
                <button className="solutions-btn"><MdOutlineKeyboardArrowLeft size={50} /></button>
                <button className="solutions-btn"><MdOutlineKeyboardArrowRight size={50} /></button>
              </div>
            </div>
          </div>
          <div className="solutions-slide-wrapper">
            <div className="solution-slider">
              <div className="solutions-item">
                <Image src={slo1} height={0} style={{ height: 'auto' }} alt="CCTV solutions for hospitals, clinics and all health care building" className="solution-slider-image" loading="lazy" />
                <p className="solutions-item-name">Health Care</p>
              </div>
              <div className="solutions-item">
                <Image src={slo2} height={0} style={{ height: 'auto' }} alt="CCTV solutions for schools, collages, library and for all education sectors" className="solution-slider-image" loading="lazy" />
                <p className="solutions-item-name">Education</p>
              </div>
              <div className="solutions-item">
                <Image src={slo3} height={0} style={{ height: 'auto' }} alt="CCTV solutions for all outdoor place full water-proofing parks, street light, traffic signal and road side" className="solution-slider-image" loading="lazy" />
                <p className="solutions-item-name">Out Door</p>
              </div>
              <div className="solutions-item">
                <Image src={slo4} height={0} style={{ height: 'auto' }} alt="CCTV solutions for all the work places, shops, wearhouse and hotels" className="solution-slider-image" loading="lazy" />
                <p className="solutions-item-name">Work Place</p>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-page-3">
          <div className="text-div">
            <h2 className="text-h1">Hilight our top surveillance packages.</h2>
            <p className="text-p">CMOS progressive scan, perfectly capturing the moving object Support OSD menu. High-speed, long distance, and real-time transmission, with top brands.</p>
          </div>
          <div className="product-slider-wrapper">
            <div id="product-slide" className="product-slide">
              <div id="product-slide-active" className="product-slide-div product-odd">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} loading="lazy" id="product-1" src={psld1} alt="CCTV 5 camera setup: 4 DOME and 1 BULLET Camera 2MP budget friendly, 8 channel DVR, 512GB SSD With power supply in best installation service in best price" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
              <div className="product-slide-div product-even">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} id="product-1" src={psld2} alt="CCTV 3 camera setup: 2 DOME and 1 BULLET Camera 2MP Setups for home || house , 4 channel DVR, 512GB SSD With power supply in best installation service in best price" loading="lazy" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
              <div className="product-slide-div product-odd">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} id="product-1" src={psld1} alt="CCTV camera setup for large Buildings: according to your need fully cusomized in best installation service in best price " loading="lazy" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
              <div className="product-slide-div product-even">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} id="product-1" src={psld2} alt="CCTV camera setup : 4 DOME and 2 BULLET Camera 2MP IP Camera Setups for Intermediate area or buildings, 8 channel NVR, 1TB SSD With power supply in best installation service in best price" loading="lazy" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
              <div className="product-slide-div product-odd">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} id="product-1" src={psld1} alt="WIFI CCTV camera setup with advanced technology: 4 DOME and 2 BULLET Camera 2MP IP Camera Setups, 4G Router, 8 channel NVR, 1TB SSD With power supply in best installation service in best price" loading="lazy" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
              <div className="product-slide-div product-even">
                <div className="product-slide-1">
                  <Image height={0} style={{ height: 'auto' }} id="product-1" src={psld2} alt="CCTV camera setup : 4 BULLET Camera 2MP IP Camera Setups for long range area, 8 channel NVR, 1TB SSD With power supply in best installation service in best price" loading="lazy" />
                </div>
                <div className="product-slide-title">
                  <p className="product-slide-title-p">HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG</p>
                  <p className="product-slide-title-p2">HF-SGGFS04</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-page-4">
          <div className="solutions-text">
            <h2 className="solutions-text-h2">Our top CCTV categories</h2>
            <div className="solutions-buttons">
              <p className="solutions-text-p">Explore our most popular selection, curated to meet your needs and preferences.</p>
              <div className="solutions-btn-box2">
                {/* <button className="solutions-btn-view">VIEW ALL</button> */}
              </div>
            </div>
          </div>
          <div className="landing-page-categories-grid">
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={psld1} alt="HD CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">HD CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={wifi_cctv} alt="WIFI CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">WIFI CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={psld1} alt="IP CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">IP CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={bullet_cctv} alt="BULLET CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">BULLET CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={dome_cctv} alt="DOME CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">DOME CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={psld1} alt="AI CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">AI CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image height={0} style={{ height: 'auto' }} className="categories-card-image" src={psld1} alt="Night Vision CCTV Cameras" loading="lazy" />
              <p className="categories-card-text">Night Vision CCTV Cameras</p>
            </div>
          </div>
        </section>
        <section className="landing-page-5">
          <div className="landing-page-5-div">
            <div className="landing-page-5-left">
              <h2 className="text-h1">What our clients say about us</h2>
              <p className="solution-teaxt-txt-2">
                These are real stories and quotes from our clients benifited. how helped to achieve their goals.
              </p>
              <div className="connent-swap-button">
                <button className="solutions-btn"><MdOutlineKeyboardArrowLeft size={50} /></button>
                <button className="solutions-btn"><MdOutlineKeyboardArrowRight size={50} /></button>
              </div>
            </div>
            {/* <div className="landing-page-5-right">
              <div className="review-card">
                <div className="comment-top-logo">
                  <SiComma size={40} />
                  <SiComma size={40} />
                </div>
                <p className="comment-content">
                  Best CCTV Solutions.
                </p>
                <p className="comment-client">
                  <span className="client-name">Rohit Sharma</span> Mumbai Indians
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <section className="landing-page-6">
          <div className="landing-page-5-div">
            <div className="landing-page-5-left">
              <h2 className="text-h1">Contact us for Assistance</h2>
              <p className="solution-teaxt-txt-2">
                {/* These are real stories and quotes from our clients benifited. how helped to achieve their goals. */}
              </p>
              <div className="contact-options">
                <div className="contact-options-item">
                  <div className="contact-op-logo">
                    <FaMailBulk size={30} />
                  </div>
                  <div className="contact-op-div">
                    <p className="contact-op-name">Email Address</p>
                    <p className="contact-value">sewadinfotect.support@gmail.com</p>
                  </div>
                </div>
                <div className="contact-options-item">
                  <div className="contact-op-logo">
                    <FaWhatsapp size={30} />
                  </div>
                  <div className="contact-op-div">
                    <p className="contact-op-name">WhatsApp Support</p>
                    <p className="contact-value">+91 9509075612</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-contact-form-card">
              <Cform />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
