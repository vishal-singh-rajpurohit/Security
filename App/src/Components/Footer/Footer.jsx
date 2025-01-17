import React from 'react'
import '../../css/Header.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer