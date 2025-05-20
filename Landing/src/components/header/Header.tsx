'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import logoLite from '@/Assets/Logo/logo2-1.png'
import logoDark from '@/Assets/Logo/logo-1.png'
import { IoIosClose } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { MenuContext } from '@/context/Contexts.context'

import '@/Styles/header.css'
import Link from 'next/link'

export function Header() {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('MenuContext must be used within a MenuProvider');
    }
    const { setOpenMenu } = context;

    const [openSearch, setOpenSearch] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    // const [initialScrollValue, setInitialScrollValue] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.getElementById("header-section");
            if (!headerSection) {
                // console.log("scroll return");
                return;
            }

            const currentScroll = window.scrollY;

            if (currentScroll > 80) { // 5rem = 80px
                // console.log("scroll added");
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
                <Link href={"/"}>
                <Image src={openSearch ? logoLite : scrolled ? logoDark : logoLite} alt="wings lens logo" className="header-section-logo-img" height={ scrolled ? 70 : 50} />
                </Link>
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
                                <Link href={"/about"} >
                                    <div className={`header-section-options-item`}>
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>About Us</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                <Link href={"/categories"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>Categories</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link>
                                {/* <Link href={"/solutions"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>Solutions</p>
                                        <span className="underline-ani-span"></span>
                                    </div>
                                </Link> */}
                                <Link href={"tech-solutions"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>IT Solutions</p>
                                        <span className="underline-ani-span"></span>
                                    </div></Link>
                                <Link href={"contact"} >
                                    <div className="header-section-options-item">
                                        <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}>Contact</p>
                                        <span className="underline-ani-span"></span>
                                    </div></Link>
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
                <button className="header-section-shop-button">Shop Now</button>
            </div>
            <div className="header-section-search-resp -resp">
                <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}><FiSearch size={20} style={{ display: openSearch ? 'none' : 'flex', cursor: 'pointer' }} onClick={() => setOpenSearch(true)} /></p>
                <p className={`header-section-options-item-p ${scrolled ? "txt-black" : ""}`}><MdMenu size={30} onClick={() => setOpenMenu?.(true)} /></p>
            </div>
        </section>
    )
}

export function Menu() {

    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('MenuContext must be used within a MenuProvider');
    }

    const { openMenu, setOpenMenu } = context;

    return (
        <section className="menu-section" style={{ display: openMenu ? 'grid' : 'none' }}>
            <div className="menu-seciton-close">
                <div className="menu-section-close-inner">
                    <IoIosClose size={50} onClick={() => setOpenMenu?.(false)} />
                </div>
            </div>
            <div className="menu-section-div">
                <Link href={"/about"} >
                    <div className="menu-item">
                        <p className="menu-item-p">About Us</p>
                    </div>
                </Link>
                <Link href={"/categories"} >
                    <div className="menu-item">
                        <p className="menu-item-p">Categories</p>
                    </div>
                </Link>
                {/* <Link href={"/solutions"} >
                    <div className="menu-item">
                        <p className="menu-item-p">Solutions</p>
                    </div></Link> */}
                <Link href={"tech-solutions"} >
                    <div className="menu-item">
                        <p className="menu-item-p">IT Solutions</p>
                    </div></Link>
                <Link href={"contact"} >
                    <div className="menu-item">
                        <p className="menu-item-p">Contact</p>
                    </div></Link>
            </div>
        </section>
    )
}