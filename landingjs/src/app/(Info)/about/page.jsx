import Image from "next/image";
import Head from "next/head";

import { FaRegCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { LuCctv } from "react-icons/lu";

import "../../../Styles/main.css";
import "../../../Styles/about.css";

// Collage Images
import CCTV_Camera_NV from "../../../Assets/About_page/CCTV_camera_for_Night_Vision.jpg";
import CCTV_Camera_Outdoor from "../../../Assets/About_page/CCTV_Camera_for_Outdoor_.jpg";
import CCTV_Camera_for_Streets from "../../../Assets/About_page/CCTV_Camera_in_Outdoor_streets.jpg";
import CCTV_Camera_for_Parks_trees from "../../../Assets/About_page/CCTV-Camera_for_paks_and_forests.jpg";

import CCTV_Camera_in_road_with_text_I_See_you from "../../../Assets/About_page/CCTV_Camera_in_road_with_text_I_See_you.jpg";

import WIFI_CCTV_Camera_Connected_directly_With_Mobile_phone_wireless_Camera from "../../../Assets/About_page/WIFI_CCTV_Camera_Connecte_directly_With_Mobile_phone_wireless_Camera.jpg";

import { AboutSlide } from "../../../components/slide/AboutSlide";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Sewad Infotech</title>
        <meta
          name="description"
          content="Learn about Sewad Infotech's mission to provide top-quality CCTV installation and security solutions in India."
        />
        <meta property="og:title" content="About Us | Sewad Infotech" />
        <meta
          property="og:description"
          content="Discover Sewad Infotech – a leader in CCTV security and smart surveillance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartcitycare.in/about" />
      </Head>

      <section className="info-page-section">
        <div className="about-page-top">
          <AboutSlide />
          <div className="about-page-top-text">
            <h1 className="but-h1">About Us</h1>
            <p className="about-page-top-text-p">
              Reliable CCTV solutions for trusted security and protection
            </p>
          </div>
        </div>

        <section className="landing-page-1 about-page-section-2">
          <div className="landing-page-1-image-div section-2-page-left">
            <Image
              src={CCTV_Camera_NV}
              alt="CCTV Camera Night Vision."
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <Image
              src={CCTV_Camera_for_Parks_trees}
              alt="CCTV Camera for Parks, streets and Trees best for outdoor."
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <Image
              src={CCTV_Camera_Outdoor}
              alt="CCTV Camera for Long Distance."
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <Image
              src={CCTV_Camera_for_Streets}
              alt="CCTV Camera for traffic signals and streets."
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-div section-2-page-right">
            <h2 className="text-h1 about-h2">Welcome To Wings Lens</h2>
            <p className="text-p about-text-p">
              We are pioneering leaders in advanced surveillance solutions
              designed to elevate security across diverse environments. Our
              commitment to excellence drives us to deliver cutting-edge
              technologies that ensure safety, efficiency, and peace of mind for
              our clients. With a comprehensive portfolio that includes
              state-of-the-art CCTV systems, intelligent video analytics, and
              integrated management software, we empower businesses and
              institutions to protect their assets and enhance operational
              effectiveness.
            </p>

            <div className="section-2-features">
              {[
                "Smart Doorbell Camera",
                "Smart Home Security",
                "Smart Wifi Cameras",
                "Smart HomeSecurity",
                "Night Vision Cameras",
                "High Quality Video",
              ].map((feature, i) => (
                <div className="section-2-features-item" key={i}>
                  <div className="section-2-list-disk">
                    <FaRegCircle />
                  </div>
                  <p className="section-2-item-name">{feature}</p>
                </div>
              ))}

              <div className="about-page-section-2-button">
                <button className="about-page-section-2-button-btn">VIEW PRODUCT</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-3-missions">
          <div className="section-2-mission-txt">
            <div className="section-2-mission-image">
              <GoGoal size={30} />
            </div>
            <h3 className="section-2-h3">Our Missions</h3>
            <p className="text-p-3">
              At Wings Lens, our mission is to create secure and safe
              environments that empower individuals and organizations to thrive.
              We are dedicated to providing innovative surveillance solutions
              that not only protect assets but also foster peace of mind.
              Through cutting-edge technology and unwavering commitment, we aim
              to enhance safety and security for all, ensuring a resilient
              future for our communities.
            </p>
          </div>
          <div className="section-2-mission-image-div">
            <Image
              src={CCTV_Camera_in_road_with_text_I_See_you}
              alt="CCTV Camera in road with text I See you"
              width={400}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section className="landing-page-1 about-landing-1">
          <div className="text-div td-3">
            <h1 className="text-h1 about-h2">Our Core Business</h1>
            <p className="text-p about-text-p">
              Wings Lens core business centers around providing advanced
              surveillance and security solutions tailored to various
              environments, including commercial, educational, and public
              sectors. This includes the development and distribution of
              state-of-the-art CCTV systems, intelligent video analytics, and
              integrated management software. Their primary focus is on creating
              safe and secure spaces through innovative technology, ensuring
              peace of mind and operational efficiency for their clients.
            </p>
          </div>
          <div className="landing-page-1-image-div li3">
            <Image
              src={WIFI_CCTV_Camera_Connected_directly_With_Mobile_phone_wireless_Camera}
              alt="WIFI CCTV Camera Connected directly With Mobile phone wireless Camera"
              width={400}
              height={250}
              className="landing-page-1-image-div-img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section className="landing-4-solutions-sm-card-grid">
          <div className="landing-4-solutions-sm-card-grid-div">
            {[
              {
                title: "HD Camera",
                description:
                  "A high-definition surveillance camera provides crystal-clear video for enhanced security monitoring.",
              },
              {
                title: "Wifi Camera",
                description:
                  "A Quality surveillance wifi camera with mobile integration for remote monitoring and control.",
              },
              {
                title: "IP Camera",
                description:
                  "An IP surveillance camera provides best video quality for enhanced security monitoring.",
              },
              {
                title: "Smart AI Camera",
                description:
                  "A Quality surveillance camera provides AI enhancement for more security.",
              },
              {
                title: "Interactive Display",
                description:
                  "Touch-enabled display with realtime interaction, control and monitoring system.",
              },
              {
                title: "4G / 5G Routers",
                description:
                  "Super Fast true 4G and 5G wifi routers, in best price range.",
              },
            ].map(({ title, description }, i) => (
              <div className="-solutions-sm-card" key={i}>
                <div className="-solutions-sm-card-img">
                  <LuCctv size={30} />
                </div>
                <h4 className="-solutions-sm-card-h4">{title}</h4>
                <p className="-solutions-sm-card-text">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="landing-page-1 about-landing-1"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-div td-3">
            <h1 className="text-h1 about-h2">Always Focus On Perfection</h1>
            <p className="text-p about-text-p">
              Sewad Infotech prioritizes quality by committing to excellence in
              all aspects of its operations. Leveraging advanced technology and
              rigorous testing, the company ensures that its products ranging
              from state of the art CCTV systems to integrated management
              software meet the highest industry standards.
            </p>
          </div>
          <div className="landing-page-1-image-div li4">
            <Image
              src={CCTV_Camera_NV}
              alt="CCTV Camera in Shopping mall"
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <Image
              src={CCTV_Camera_Outdoor}
              alt="CCTV Camera on Railway Station"
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section className="landing-page-1 about-landing-1">
          <div className="text-div td-3">
            <h1 className="text-h1 about-h2">
              Complete IT Solution for Grow your Business
            </h1>
            <p className="text-p about-text-p">
              Wings Lens core business centers around providing advanced
              surveillance and security solutions tailored to various
              environments, including commercial, educational, and public
              sectors. This includes the development and distribution of
              state-of-the-art CCTV systems, intelligent video analytics, and
              integrated management software. Their primary focus is on creating
              safe and secure spaces through innovative technology, ensuring
              peace of mind and operational efficiency for their clients.
            </p>
          </div>
          <div className="landing-page-1-image-div li3">
            <Image
              src={CCTV_Camera_for_Streets}
              alt="CCTV Camera for streets"
              width={400}
              height={250}
              className="landing-page-1-image-div-img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
