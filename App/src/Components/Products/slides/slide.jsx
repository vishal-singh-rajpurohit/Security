import React, { useEffect, useState } from 'react'
import './slide.css'
import c from '../../../Assets/slide/c.jpeg'
import c2 from '../../../Assets/slide/c2.jpeg'
import c3 from '../../../Assets/slide/c3.jpeg'
import c4 from '../../../Assets/slide/c4.jpeg'

const images = [
    c,
    c2,
    c3,
    c4
]



const Slide = () => {
    const [imgNumber , setImgNumber] = useState([]);

    useEffect(()=>{
        const interval = setInterval( () =>{
            setImgNumber((prev)=> (prev + 1) % images.length);
        }, 4000);

        return ()=> clearInterval(interval);
    }, [imgNumber])


  return (
    <section className="slide-main">
        <div className="slide-box">
            <img src={images[imgNumber]} alt="" className="slide-image" />
        </div>
    </section>
  )
}

export default Slide