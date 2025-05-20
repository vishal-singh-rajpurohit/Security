'use client';

import '../../Styles/slides.css';
import Image from 'next/image';

import sl1 from '../../Assets/SlideImage/HomePage/Hero_section_image_1_Desktop.png';
import sl2 from '../../Assets/SlideImage/HomePage/Hero_section_image_2_Desktop.png';
import sl3 from '../../Assets/SlideImage/HomePage/Hero_section_image_3_Desktop.png';
import sl4 from "../../Assets/SlideImage/HomePage/Hero_section_image_1_Mobile.png";
import sl5 from "../../Assets/SlideImage/HomePage/Hero_section_image_2_Mobile.png";
import sl6 from "../../Assets/SlideImage/HomePage/Hero_section_image_3_Mobile.png";

import { useEffect, useState } from 'react';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState('');
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveSlide(window.location.hash);
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        <div className="slider">
          <div className="slider-inner">
            <Image id='slide-2' src={width > 850 ? sl2 : sl5} alt="CCTV Camera Services Hero Section " />
            <Image id='slide-1' src={width > 850 ? sl1 : sl4} alt="CCTV Camera" />
            <Image id='slide-3' src={width > 850 ? sl3 : sl6} alt="CCTV Camera Hero Section " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
