import { useSelector } from "react-redux"
import x from "../../Assets/Logo/loader-bg.png"

import "../../Styles/transition.css"

const Transition1 = () => {

    const loading = useSelector((state) => state.variable.loading);

    return (
        <section className="loader-abs" style={{display: loading? "flex": "none"}}>
            <div className="loader">
                <div className="pulse-ring"></div>
                <img src={x} alt="Logo" className="logo" />
            </div>
        </section>

    )
}

export { Transition1 }
