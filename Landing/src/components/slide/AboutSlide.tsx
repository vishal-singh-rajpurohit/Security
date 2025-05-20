'use client'
import Image from 'next/image';
import React from 'react'

import tp1 from "@/Assets/SlideImage/ts.jpg"
import tp2 from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"

import hero_section_image_desktop from "@/Assets/SlideImage/ts.jpg"
import hero_section_image_mobile from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"


import { useEffect, useState } from "react";

function AboutSlide() {

    const [width, setWidth] = useState(1500);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return (
        <Image height={0} style={{ height: "auto" }} src={width >= 850 ? hero_section_image_desktop || tp1 : hero_section_image_mobile || tp2} alt="" />
    )
}

export { AboutSlide }
