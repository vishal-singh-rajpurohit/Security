
import "./footer.css"
import { logos } from "../../Assets/Assets"
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import {Link} from "react-router-dom"



const FooterSect = ()  => {
  return (
    <footer className="section-footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img style={{height: 'auto'}} className="footer-login-img" alt="" src={logos[0]} />
        </div>
        <p className="footer-left-text">
          Wings Lens Solutions offers advanced CCTV and surveillance solutions providing security systems for businesses, homes, and industries across India.
          <br />
          <span className="footer-highlight">
            Take your business online with Wings Lens.
          </span>
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-right-childs">
          <p className="footer-context">Categories</p>
          <ul className="footer-context-ul">
            <li className="footer-context-li">WIFI CCTV Camera</li>
            <li className="footer-context-li">HD CCTV Camera</li>
            <li className="footer-context-li">WIFI CCTV Camera</li>
            <li className="footer-context-li">HD CCTV Camera</li>
            <li className="footer-context-li">WIFI CCTV Camera</li>
            <li className="footer-context-li">HD CCTV Camera</li>
            <li className="footer-context-li">WIFI CCTV Camera</li>
          </ul>
        </div>
        <div className="footer-right-childs">
          <p className="footer-context">Solutions</p>
          <ul className="footer-context-ul">
            <li className="footer-context-li">Industrial</li>
            <li className="footer-context-li">Helath Care</li>
            <li className="footer-context-li">Vehicle</li>
          </ul>
        </div>
        <div className="footer-right-childs">
          <p className="footer-context">Infomation</p>
          <ul className="footer-context-ul">
            <Link to={"/about"}><li className="footer-context-li">About Us</li></Link>
            <Link to={"/contact"}><li className="footer-context-li">Contact Us</li></Link>
            <Link to={"/solutions"}><li className="footer-context-li">Solutions</li></Link>
            <Link to={"/categories"}><li className="footer-context-li">Categories</li></Link>
            <Link to={"/terms"}><li className="footer-context-li">Terms and Condition</li></Link>
          </ul>
        </div>
      </div>
      <div className="footer-social-logo">
          <BsInstagram size={25}  />
          <BsWhatsapp  size={25} />
          <BsLinkedin  size={25} />
        </div>
      <p className="copy-text">
          Copyright &copy; Sewad Infotech. All Rights Reserved, Site by <span>Sewad Infotech Solutions</span>.
        </p>
    </footer>
  )
}

export default FooterSect
