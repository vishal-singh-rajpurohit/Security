import React from 'react'
import '../../Styles/about.css'
import a from '../../Assets/x.jpg'

const About = () => {

    const gotToHome = () =>{
        window.open('https://www.instagram.com/sewad.infotech', "_blank")
    }
    
    return (
        <>
            <section className="main-about">
                <div className="left-about">
                    <div className="left-about-heading">
                        <h1 className="about-heading">
                            Transforming Security with Personalized Solutions.
                        </h1>
                    </div>
                    <div className="left-about-para">
                        <p className="left-about-paragraph">
                        Founded 15 years ago with a simple vision—to provide top-quality CCTV installation and security services. Today, we are proud to serve the local market with reliable and cutting-edge security solutions.
                        </p>
                    </div>
                    <div className="left-about-bottom-button">
                        <button className="left-btn-yellow" onClick={gotToHome}>Know more about us</button>
                    </div>
                </div>
                <div className="right-about">
                    <div className="right-img-about">
                        <img src={a} alt="" className="about-image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About