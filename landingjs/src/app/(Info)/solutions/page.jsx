import Image from "next/image";
import "../../../Styles/main.css";
import "../../../Styles/about.css";
import "../../../Styles/solutions.css";

import tp1 from "../../../Assets/SlideImage/ts.jpg";
import tp2 from "../../../Assets/About_page/WIFI_CCTV_Camera_Connecte_directly_With_Mobile_phone_wireless_Camera.jpg";

import solt from "../../../Assets/solutions/solt.webp";
import { AboutSlide } from "../../../components/slide/AboutSlide";
import Link from "next/link";

const industrySolutions = [
  { href: "/categories/india", label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
];

const scenarioSolutions = [
  { label: "Warehouse" },
  { label: "Warehouse" },
  { label: "Warehouse" },
  { label: "Warehouse" },
  { label: "Warehouse" },
  { label: "Warehouse" },
];

const functionSolutions = [
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
  { label: "Oil and Gas Stations" },
];

export default function Page() {
  return (
    <section className="info-page-section">
      <div className="about-page-top">
        <AboutSlide img_sm={tp2} img_bg={tp1} />
        <div className="about-page-top-text">
          <h1 className="but-h1">Our Solutions</h1>
          <p className="about-page-top-text-p">
            Comprehensive surveillance solutions for all applications
          </p>
        </div>
      </div>

      {/* Solutions by Industries */}
      <section className="solution-text-div">
        <h2 className="solution-h2">Solution by Industries</h2>
      </section>
      <section className="solutions-grid">
        <div className="solutions-grid-div solutions-grid-div-scroll">
          {industrySolutions.map(({ href, label }, idx) =>
            href ? (
              <Link key={idx} href={href}>
                <div className="solutions-grid-card">
                  <Image src={solt} alt={label} width={300} height={200} />
                  <p className="some-text">{label}</p>
                </div>
              </Link>
            ) : (
              <div key={idx} className="solutions-grid-card">
                <Image src={solt} alt={label} width={300} height={200} />
                <p className="some-text">{label}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Solutions by Scenarios */}
      <section className="solution-text-div solution-text-div-2">
        <h2 className="solution-h2">Solution by Scenarios</h2>
      </section>
      <section className="solutions-grid">
        <div className="solutions-grid-div solutions-grid-div-secnario">
          {scenarioSolutions.map(({ label }, idx) => (
            <div key={idx} className="solutions-grid-card-secnario">
              <Image src={solt} alt={label} width={300} height={200} />
              <div className="solutions-grid-card-secnario-text">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions by Functions */}
      <section className="solution-text-div">
        <h2 className="solution-h2">Solution by Functions</h2>
      </section>
      <section className="solutions-grid">
        <div className="solutions-grid-div solutions-grid-div-scroll">
          {functionSolutions.map(({ label }, idx) => (
            <div key={idx} className="solutions-grid-card">
              <Image src={solt} alt={label} width={300} height={200} />
              <p className="some-text">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
