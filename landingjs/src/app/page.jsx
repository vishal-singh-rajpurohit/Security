import Slide from "../components/slide/Slide";
import Image from "next/image";
import Head from "next/head";
import "../Styles/main.css";

import img1 from '../Assets/Stock/Security_camera_monitors.jpg';

import slo1 from "../Assets/solutions/Hospitals_survillance.jpg";
import slo2 from "../Assets/solutions/Eduction_sector.jpg";
import slo3 from "../Assets/solutions/Outdoor_CCTV_Camera.jpg";
import slo4 from "../Assets/solutions/CCTV_for_your_workplace.jpg";

import psld1 from "../Assets/SlideImage/ProductSlider/psld1.png";
import psld2 from "../Assets/SlideImage/ProductSlider/psld2.png";

import wifi_cctv from "../Assets/Categories/wifi_cctv_camera.png";
import bullet_cctv from "../Assets/Categories/bullet_camer.jpg";
import dome_cctv from "../Assets/Categories/dome_cctv_camer.jpg";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import Cform from "../components/Cform";

import { productsSchema } from "../seo/schema/JOSN-LD";
import { breadcrumbSchema } from "../seo/schema/PRODUCT-LD";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wings Lens | Best CCTV Solutions in Your City</title>
        <meta
          name="description"
          content="Ensure safety with our perfect CCTV camera Setups with installation services in India. Expert installation, repair, and maintenance services near you. Get a free quote"
        />

        <meta
          property="og:description"
          content="Ensure safety with our perfect CCTV camera Setups with installation services in India near you. Expert installation, repair, and maintenance services for all occasions near you. Get a free quote"
        />
        <meta property="og:title" content="Wings Lens | Best CCTV Solutions at Your Place" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:url" content="http://localhost:3000" />
        <meta name="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta property="og:image:type" content="image/jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productsSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      <section className="home-section-page">
        <Slide />
        <section className="landing-page-1">
          <div className="text-div">
            <h1 className="text-h1">CCTV camera installation and services</h1>
            <p className="text-p">Complete CCTV solution with best services.</p>
          </div>
          <div className="landing-page-1-image-div">
            <Image
              src={img1}
              alt="CCTV camera installation and services"
              width={700}
              height={475}
              className="landing-page-1-image-div-img"
              loading="lazy"
            />
          </div>
        </section>

        <section className="landing-page-2">
          <div className="solutions-text">
            <h2 className="solutions-text-h2">Our Solutions</h2>
            <div className="solutions-buttons">
              <p className="solutions-text-p">CCTV Solutions for every workplace.</p>
              <div className="solutions-btn-box">
                <button className="solutions-btn" aria-label="Previous solution">
                  <MdOutlineKeyboardArrowLeft size={50} />
                </button>
                <button className="solutions-btn" aria-label="Next solution">
                  <MdOutlineKeyboardArrowRight size={50} />
                </button>
              </div>
            </div>
          </div>
          <div className="solutions-slide-wrapper">
            <div className="solution-slider">
              <div className="solutions-item">
                <Image
                  src={slo1}
                  alt="CCTV solutions for hospitals, clinics and all health care buildings"
                  width={400}
                  height={250}
                  className="solution-slider-image"
                  loading="lazy"
                />
                <p className="solutions-item-name">Health Care</p>
              </div>
              <div className="solutions-item">
                <Image
                  src={slo2}
                  alt="CCTV solutions for schools, colleges, library and for all education sectors"
                  width={400}
                  height={250}
                  className="solution-slider-image"
                  loading="lazy"
                />
                <p className="solutions-item-name">Education</p>
              </div>
              <div className="solutions-item">
                <Image
                  src={slo3}
                  alt="CCTV solutions for all outdoor places, fully waterproof parks, street light, traffic signals, and roadside"
                  width={400}
                  height={250}
                  className="solution-slider-image"
                  loading="lazy"
                />
                <p className="solutions-item-name">Outdoor</p>
              </div>
              <div className="solutions-item">
                <Image
                  src={slo4}
                  alt="CCTV solutions for workplaces, shops, warehouses, and hotels"
                  width={400}
                  height={250}
                  className="solution-slider-image"
                  loading="lazy"
                />
                <p className="solutions-item-name">Work Place</p>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-page-3">
          <div className="text-div">
            <h2 className="text-h1">Highlight our top surveillance packages.</h2>
            <p className="text-p">
              CMOS progressive scan, perfectly capturing the moving object. Support OSD menu. High-speed, long distance, and real-time transmission, with top brands.
            </p>
          </div>
          <div className="product-slider-wrapper">
            <div id="product-slide" className="product-slide">
              {[psld1, psld2, psld1, psld2, psld1, psld2].map((img, i) => (
                <div
                  key={i}
                  className={`product-slide-div ${i % 2 === 0 ? "product-odd" : "product-even"}`}
                >
                  <div className="product-slide-1">
                    <Image
                      src={img}
                      alt={`CCTV product setup ${i + 1}`}
                      width={400}
                      height={300}
                      loading="lazy"
                      id={`product-${i + 1}`}
                    />
                  </div>
                  <div className="product-slide-title">
                    <p className="product-slide-title-p">
                      HD-NVR-4328H8-4K HC-IPC-SDQ41620L HF-SGGFS04-65W 4 PORT FULL GIG
                    </p>
                    <p className="product-slide-title-p2">HF-SGGFS04</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-page-4">
          <div className="solutions-text">
            <h2 className="solutions-text-h2">Our top CCTV categories</h2>
            <div className="solutions-buttons">
              <p className="solutions-text-p">
                Explore our most popular selection, curated to meet your needs and preferences.
              </p>
              <div className="solutions-btn-box2">
                {/* <button className="solutions-btn-view">VIEW ALL</button> */}
              </div>
            </div>
          </div>
          <div className="landing-page-categories-grid">
            <div className="categories-card">
              <Image
                src={psld1}
                alt="HD CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">HD CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={wifi_cctv}
                alt="WIFI CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">WIFI CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={psld1}
                alt="IP CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">IP CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={bullet_cctv}
                alt="BULLET CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">BULLET CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={dome_cctv}
                alt="DOME CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">DOME CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={psld1}
                alt="AI CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">AI CCTV Cameras</p>
            </div>
            <div className="categories-card">
              <Image
                src={psld1}
                alt="Night Vision CCTV Cameras"
                width={300}
                height={200}
                className="categories-card-image"
                loading="lazy"
              />
              <p className="categories-card-text">Night Vision CCTV Cameras</p>
            </div>
          </div>
        </section>

        {/* <section className="landing-page-5">
          <div className="landing-page-5-div">
            <div className="landing-page-5-left">
              <h2 className="text-h1">What our clients say about us</h2>
              <p className="solution-text-txt-2">
                These are real stories and quotes from our clients benefited. How we helped them achieve their goals.
              </p>
              <div className="connect-swap-button">
                <button className="solutions-btn" aria-label="Previous testimonial">
                  <MdOutlineKeyboardArrowLeft size={50} />
                </button>
                <button className="solutions-btn" aria-label="Next testimonial">
                  <MdOutlineKeyboardArrowRight size={50} />
                </button>
              </div>
            </div>
          </div>
        </section> */}
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
