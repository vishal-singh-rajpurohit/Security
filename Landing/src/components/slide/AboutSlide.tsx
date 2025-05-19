'use client'
import Image from 'next/image';
import React from 'react'

import tp1 from "@/Assets/SlideImage/ts.jpg"
import tp2 from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"


import { useEffect, useState } from "react";

function AboutSlide({img_bg, img_sm}: any) {

    const [width, setWidth] = useState(1500);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return (
        <Image height={0} style={{ height: "auto" }} src={width >= 850 ? img_bg || tp1 : img_sm || tp2} alt="" />
    )
}

export { AboutSlide }
