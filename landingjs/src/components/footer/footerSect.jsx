import React from 'react'
import '../../Styles/footer.css'
import Image from 'next/image'
import Link from 'next/link'

import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import logoDark from '../../Assets/Logo/logo-1.png'


function FooterSect() {
  return (
    <footer className="section-footer">
      <div className="footer-left">
        <div className="footer-logo">
          <Image
            height={70}
            width={140}
            style={{ height: 'auto', width: 'auto' }}
            className="footer-login-img"
            alt="Wings Lens Solutions Logo"
            src={logoDark}
          />
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
            <Link href="/categories/wifi-cctv"><li className="footer-context-li">WiFi CCTV Camera</li></Link>
            <Link href="/categories/hd-cctv"><li className="footer-context-li">HD CCTV Camera</li></Link>
            <Link href="/categories/bullet-cctv"><li className="footer-context-li">Bullet CCTV Camera</li></Link>
            <Link href="/categories/dome-cctv"><li className="footer-context-li">Dome CCTV Camera</li></Link>
          </ul>
        </div>

        <div className="footer-right-childs">
          <p className="footer-context">Solutions</p>
          <ul className="footer-context-ul">
            <li className="footer-context-li">Industrial</li>
            <li className="footer-context-li">Health Care</li>
            <li className="footer-context-li">Vehicle</li>
          </ul>
        </div>

        <div className="footer-right-childs">
          <p className="footer-context">Information</p>
          <ul className="footer-context-ul">
            <Link href="/about"><li className="footer-context-li">About Us</li></Link>
            <Link href="/contact"><li className="footer-context-li">Contact Us</li></Link>
            <Link href="/tech-solutions"><li className="footer-context-li">IT Solutions</li></Link>
            <Link href="/categories"><li className="footer-context-li">Categories</li></Link>
            <Link href="/terms"><li className="footer-context-li">Terms and Conditions</li></Link>
          </ul>
        </div>
      </div>

      <div className="footer-social-logo">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram size={25} /></a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"><BsWhatsapp size={25} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
      </div>

      <p className="copy-text">
        Copyright &copy; Wings Lens. All Rights Reserved.
        Site by <span>Wings Lens Solutions</span>.
      </p>
    </footer>
  )
}

export default FooterSect
