import x from "../../Assets/Logo/loader-bg.png"

import "../../Styles/transition.css"

const Transition1 = () => {
    return (
        <section className="loader-abs">
            <div className="loader">
                <div className="pulse-ring"></div>
                <img src={x} alt="Logo" className="logo" />
            </div>
        </section>

    )
}

export { Transition1 }
