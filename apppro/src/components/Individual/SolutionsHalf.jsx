import React from 'react'
import one from "../../Assets/Offer/it2.jpg"
import two from "../../Assets/Offer/it4.jpg"

import "../../Styles/Offer/offerhalf.css"

const SolutionsHalf = () => {
    return (
        <section className="solutions-half-section">
            <div className="solution-half-card">
                <div className="solution-half-card-img">
                    <img src={one} alt="" className="solution-half-card-imgae" />
                </div>
                <div className="solution-half-card-content">
                    <h2 className="solution-half-card-content-h2">Take Your Business Online</h2>
                </div>
            </div>
            <div className="solution-half-card">
                <div className="solution-half-card-img">
                    <img src={two} alt="" className="solution-half-card-imgae" />
                </div>
                <div className="solution-half-card-content">
                    <h2 className="solution-half-card-content-h2">Take Your Business Online</h2>
                </div>
            </div>
        </section>
    )
}

export default SolutionsHalf
