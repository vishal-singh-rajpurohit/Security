import React, { useContext, useEffect, useState } from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { TbEye, TbEyePause } from "react-icons/tb";
import { TbDatabaseEdit } from "react-icons/tb";
import AdminContext from '../../context/AdminContext.context';




const Products = () => {

    const { Products, serveProduct, suspendProduct , selectProduct, pubishProduct} = useContext(AdminContext);
    // const {filter, setFilter} = useState()

    useEffect(() => {
        serveProduct();
    }, [])

    return <>
        <section className="prodcut">
            <div className="product-grid">
                {
                    Products? Products.map((product, index) => (
                        <div className="product-card" key={index} >
                            <div className="image-grid-display"></div>
                            <div className="bottom-name">
                                <p className="name">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="name">Price : 12000</p>
                                <div className="options">
                                    <RiDeleteBin4Fill size={20}  />
                                    {
                                        product.Status === 'new' ? <TbEyePause size={20} onClick={()=>suspendProduct(Products._id)} /> 
                                        : <TbEye size={20} onClick={()=>pubishProduct(Products._id)}/> 
                                    }
                                    
                                    
                                    <TbDatabaseEdit size={20} onClick={()=>selectProduct(product._id)} />
                                </div>
                            </div>
                        </div>
                    )):
                    <h1>Loading...</h1>
                }

            </div>
        </section>
    </>
}

export default Products