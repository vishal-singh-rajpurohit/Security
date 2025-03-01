import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { TbEyePause } from "react-icons/tb";
import { TbDatabaseEdit } from "react-icons/tb";


const Products = () => {
  return <>
    <section className="prodcut">
        <div className="product-grid">
            <div className="product-card">
                <div className="image-grid-display"></div>
                <div className="bottom-name">
                    <p className="name">Lorem ipsum dolor sit amet consectetur</p>
                    <p className="name">Price : 12000</p>
                    <div className="options">
                        <RiDeleteBin4Fill size={20}/>
                        <TbEyePause size={20}/>
                        <TbDatabaseEdit size={20} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default Products