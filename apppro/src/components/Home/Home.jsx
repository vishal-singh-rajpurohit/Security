import React from 'react'
import { ImageSlider } from '../Individual/Slides'
import ProductScroll from '../Individual/Views/ProductScroll'
import ProductGrid from '../Individual/Views/ProductGrid'
import OfferGrid from '../Individual/Views/OfferGrid'
import SolutionsHalf from '../Individual/SolutionsHalf'

function Home() {

  return (
    <section className="home-page">
        <ImageSlider />
        <ProductScroll />
        <SolutionsHalf />
        <OfferGrid />
        <ProductGrid />
    </section>
  )
}

export default Home
