import React from 'react'
import { ImageSlider } from '../Individual/Slides'
import ProductScroll from '../Individual/Views/ProductScroll'
import ProductGrid from '../Individual/Views/ProductGrid'
import OfferGrid from '../Individual/Views/OfferGrid'

function Home() {

  return (
    <section className="home-page">
        <ImageSlider />
        <ProductScroll />
        <OfferGrid />
        <ProductGrid />
    </section>
  )
}

export default Home
