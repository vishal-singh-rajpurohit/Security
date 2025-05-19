import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { FaRupeeSign } from 'react-icons/fa';
import { AboutSlide } from '@/components/slide/AboutSlide';

import tp1 from "@/Assets/SlideImage/ts.jpg"
import tp2 from "@/Assets/About_page/CCTV_Camera_for_Outdoor_.jpg"

import "./category-css.css"

import categories_JSON from "@/data/categories.json"
import { notFound } from 'next/navigation';
import Head from 'next/head';

interface categoryType {
  cat_id: number,
  slug: string,
  hero_section: {
    hero_section_desktop: string,
    hero_section_mobile: string,
    hero_section_alt: string
  },
  category_name: string,
  first_text: string,
  min_cost: number,
  max_cost: number,
  features: Array<string>,
  description: string,
  features_img: string,
  features_alt: string,
  desc_img: string,
  desc_alt: string,
  pricing_img: string,
  pricing_alt: string
}

async function fetchCategoryData(catSlug: string) {
  const product = categories_JSON.find((value) => value.slug === catSlug);
  if (!product) {
    return null; // No product found
  }
  return product;
}



export default async function CategoryPage({ params }: { params: { category: string } }) {
  const {category} = params;

  const cat_data = await fetchCategoryData(category);

  if(!cat_data){
    notFound();
  }

  return (
    <>
    <Head >
      <title> || Sewad Infotech</title>

      <meta name="description" content={cat_data?.description} />

        <meta property="og:description" content={cat_data?.description} />
        <meta property="og:title" content={`${cat_data?.category_name} || Sewad Infotech `} />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="" />
        <meta name="og:url" content="http://localhost:3000" />
        <meta name="og:locale" content="en_IN"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image:type" content="image/jpeg" />
    </Head>
    <section className="info-page-section">
      <div className="about-page-top">
        {/* <AboutSlide img_sm={tp2} img_bg={cat_data?.hero_section?.hero_section_desktop} alt="cat_data?.hero_section?.alt" /> */}
        <div className="about-page-top-text">
          <h1 className="but-h1">{cat_data?.category_name}</h1>
          <p className="about-page-top-text-p">Reliable surveillance products for every need</p>
        </div>
      </div>
      <section className="info-page-features-seciton">
        <section className="info-page-featureas-setion-left">
          <h2 className="info-page-features-h2">
            Features
          </h2>
          <ul className="inf-features-ul">
            {
              cat_data?.features?.map((feature) => (
                <li className="info-features-li">
                  {feature}
                </li>
              ))
            }
          </ul>
        </section>
        <section className="info-page-featureas-setion-right">
          <Image height={0} style={{ height: "auto" }} src={tp1} alt={cat_data?.features_alt || "CCTV Camera features"} />
        </section>
      </section>
      <section className="info-page-features-seciton">
        <section className="info-page-featureas-setion-right">
          <Image height={0} style={{ height: "auto" }} src={tp1} alt={ cat_data?.desc_alt ||'CCTV Camera description'} />
        </section>
        <section className="info-page-featureas-setion-left">
          <h2 className="info-page-features-h2">
            Description
          </h2>
          <div className="categories-description">
            <p className="categories-description-p">
              {cat_data?.description}
            </p>
          </div>
        </section>
      </section>
      <section className="info-page-features-seciton">
        <section className="info-page-featureas-setion-left">
          <h2 className="info-page-features-h2">
            Price Range (Single Unit)
          </h2>
          <div className="info-page-price-range-div">
            <div className="-price-div">
              <p className="max-p-key">Minimum Price</p>
              <p className="max-p-value"> <FaRupeeSign /> {cat_data?.min_cost}</p>
            </div>
            <div className="-price-div">
              <p className="max-p-key">Maximum Price</p>
              <p className="max-p-value"><FaRupeeSign /> {cat_data?.max_cost}</p>
            </div>
          </div>
        </section>
        <section className="info-page-featureas-setion-right">
          <Image height={0} style={{ height: "auto" }} src={tp1} alt={cat_data?.pricing_alt || "Price"} />
        </section>
      </section>
    </section>
    </>
  );
};

