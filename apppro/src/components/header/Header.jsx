import { useContext, useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./header.css"
import { AppContext } from '../../context/AppContext'
import { useSelector } from 'react-redux'

export function Header() {

    const { setOpenMenu } = useContext(AppContext);

    const loggedIn = useSelector((state) => state.auth.isLoggedIn);

    const [openSearch, setOpenSearch] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.getElementById("header-section");
            if (!headerSection) {
                return;
            }

            const currentScroll = window.scrollY;

            if (currentScroll > 80) {
                headerSection.classList.add("scrolled");
                setScrolled(true)
            } else {
                headerSection.classList.remove("scrolled");
                setScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

        // Update width on load
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize(); // Initial call

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id='header-section' className={`header-section ${openSearch ? "-brite" : ""}`}>
            <div className="header-section-logo">
                {/* <img src={openSearch ? logoLite : scrolled ? logoLite : logoDark} alt="sewad infotech" className="header-section-logo-img" /> */}
                <img src={""} alt="sewad infotech" className="header-section-logo-img" />
                {/* <p className="logo-text">Sewad Infotech</p> */}
            </div>
            <div className="header-section-options">
                {
                    windowWidth < 1150 ?
                        <div className="header-section-search-div" style={{ display: openSearch ? 'flex' : 'none' }}>
                            <div className="header-section-search" >
                                <input type="text" placeholder='Search your product' className="header-section-search-input" />
                                <IoIosClose onClick={() => setOpenSearch(false)} size={30} color='gray' style={{ cursor: 'pointer' }} />
                            </div>
                        </div> : <>
                            <div className="header-section-options-div resp-none" style={{ display: openSearch ? 'none' : 'flex' }}>
                                <Link to={"/about"} >
                                    <div className={`header-section-options-item`}>
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>About Us</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                <Link to={"/categories"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>Categories</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                <Link to={"/solutions"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>Solutions</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                <Link to={"tech-solutions"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>IT Solutions</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                <div className="header-section-options-item">
                                    <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}><FiSearch size={20} style={{ cursor: 'pointer' }} onClick={() => setOpenSearch(true)} /></p>
                                </div>
                            </div>
                            <div className="header-section-search-div" style={{ display: openSearch ? 'flex' : 'none' }}>
                                <div className="header-section-search" >
                                    <input type="text" placeholder='Search your product' className="header-section-search-input" />
                                    <IoIosClose onClick={() => setOpenSearch(false)} size={30} color='gray' style={{ cursor: 'pointer' }} />
                                </div>
                            </div></>
                }
            </div>
            <div className="header-section-shop- resp-none">
                <div className="login-singhup-text-div">
                    {
                        !loggedIn ?
                            <> <Link to={"/login"}>
                                <span className="login-signup-text" style={{ color: scrolled ? 'black' : 'white' }}>Login</span>
                            </Link>
                                <Link to={"/signup"}>
                                    <span className="login-signup-text" style={{ color: scrolled ? 'black' : 'white' }}>Sign up</span>
                                </Link> </>
                            : <Link to={"/signup"}>
                                <span className="login-signup-text"><FaUserCircle size={30} color={scrolled ? 'black' : 'white'} /> </span>
                            </Link>
                    }


                </div>
            </div>
            <div className="header-section-search-resp -resp">
                <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}><FiSearch size={20} style={{ display: openSearch ? 'none' : 'flex', cursor: 'pointer' }} onClick={() => setOpenSearch(true)} /></p>
                <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}><MdMenu size={30} onClick={() => setOpenMenu(true)} /></p>
            </div>
        </section>
    )
}

export function Menu() {

    const { openMenu, setOpenMenu } = useContext(AppContext);

    return (
        <section className="menu-section" style={{ display: openMenu ? 'grid' : 'none' }}>
            <div className="menu-seciton-close">
                <div className="menu-section-close-inner">
                    <IoIosClose size={50} onClick={() => setOpenMenu(false)} />
                </div>
            </div>
            <div className="menu-section-div">
                <Link to={"contact"} >
                    <div className="menu-item">
                        <p className="menu-item-p">User Account</p>
                    </div>
                </Link>
                <Link to={"/about"} >
                    <div className="menu-item">
                        <p className="menu-item-p">About Us</p>
                    </div>
                </Link>
                <Link to={"/categories"} >
                    <div className="menu-item">
                        <p className="menu-item-p">Categories</p>
                    </div>
                </Link>
                <Link to={"/solutions"} >
                    <div className="menu-item">
                        <p className="menu-item-p">Solutions</p>
                    </div>
                </Link>
                <Link to={"tech-solutions"} >
                    <div className="menu-item">
                        <p className="menu-item-p">IT Solutions</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}