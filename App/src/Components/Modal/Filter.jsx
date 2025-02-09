import React, { useContext, useEffect, useState } from 'react'
import { GoEyeClosed } from 'react-icons/go'
import {filterAttributes} from '../../constants'
import '../../Styles/filter.css'
import AuthContext from '../../context/AuthContext.context'

const Filter = () => {
    const { filterOpen, setFilterOpen, filterAts, setFilterAts, filterKeys, setFilterKeys, filters, setFilters, pageNumber } = useContext(AuthContext);


    useEffect(() => {
        serveFilterProducts(pageNumber, filters, "CUSTOMER");
    }, [filters,])

    return (
        <section className="filter-section" style={{ display: filterOpen ? 'flex' : 'none' }}>
            <div className="filter-top">
                <GoEyeClosed style={{ cursor: 'pointer' }} onClick={() => setFilterOpen(false)} size={30} />
            </div>
            <div className="filter-btm">
                <div className="filter-left">
                    <ul className="filter-left-ul">
                        {/* <li className="filter-left-li" onClick={()=>setFilterKeys("Price")}>
                    Price
                    </li> */}
                        <li className="filter-left-li" onClick={() => setFilterKeys("Price")}>
                            Special Features
                        </li>
                        <li className="filter-left-li" onClick={() => setFilterKeys("NumberOfCameras")}>
                            Number of Cameras
                        </li>
                        <li className="filter-left-li" onClick={() => setFilterKeys("CameraQuality")}>
                            Camera Quality
                        </li>
                        <li className="filter-left-li" onClick={() => setFilterKeys("CameraQuality")}>
                            Camera Type
                        </li>
                        <li className="filter-left-li" onClick={() => setFilterKeys("Price")}>
                            Camera Mega Pixels
                        </li>
                        <li className="filter-left-li" onClick={() => setFilterKeys("Price")}>
                            Indoor / Outdoor
                        </li>
                    </ul>
                </div>
                <div className="filter-right">
                    <div className="filter-right-full">
                        <ul className="filter-item-ul">
                            {
                                filterAts?.map((attrbute) => (
                                    <li className="filter-item-li">
                                        <input type="checkbox" name="" id="" className="filter-cb" />
                                        <label htmlFor="" className="filter-cb">HD</label>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter