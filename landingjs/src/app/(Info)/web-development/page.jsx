import "../../../Styles/main.css";
import "../../../Styles/about.css";
import "../../../Styles/itsolutions.css";

import analysis_image from "../../../Assets/icons/analysis.webp";

import { AboutSlide } from "../../../components/slide/AboutSlide";

import Image from "next/image";

export default function Page() {
  return (
    <section className="info-page-section">
      <div className="about-page-top">
        <AboutSlide />
        <div className="about-page-top-text about-page-top-text-2">
          <h1 className="it-solutions-h1">
            We code your <div></div>
            <span className="it-sol-h1-span">Dream</span> to <div></div>
            <span className="it-sol-h1-span-2">Reality</span>
          </h1>
          <p className="it-soutions-page-top-text-p">
            Grow your <span className="it-sol-txt-span-1">Business</span> with Web
          </p>
        </div>
      </div>
      <section className="process">
        <section className="it-solutions-packages">
          <div className="it-solutions-card">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="it-solution-card-content">
                <div className="it-solution-card-image">
                  <Image src={analysis_image} loading="lazy" alt="Analysis Icon" height={70} />
                </div>
                <h3 className="card-heading">Basic Landing Page</h3>
                <p className="it-sol-p">
                  We don’t just go about designing a website, without proper analysis. On receipt of order, we do a proper research and analysis of your business.
                </p>
                <h5 className="it-sol-h5">Features & Service</h5>
                <ul className="it-solutions-ul">
                  <li className="it-solutions-li">Pages: Describe your business online.</li>
                  <li className="it-solutions-li">Contact: One contact form.</li>
                  <li className="it-solutions-li">Price: ₹10000 - ₹20000</li>
                  <li className="it-solutions-li">Delivery: 5 to 10 Days</li>
                  <li className="it-solutions-li">Domain: your preference</li>
                  <li className="it-solutions-li">Service: 1 Month Free</li>
                </ul>
                <button className="appoint-button">appoint for free</button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
