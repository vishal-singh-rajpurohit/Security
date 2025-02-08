import React, { useContext } from 'react'
import {GoEyeClosed} from 'react-icons/go'
import '../../Styles/filter.css'
import AuthContext from '../../context/AuthContext.context'

const Filter = () => {
    const { filterOpen, setFilterOpen,} = useContext(AuthContext)
  return (
    <section className="filter-section" style={{display: filterOpen? 'flex' : 'none'}}>
        <div className="filter-top">
            <GoEyeClosed style={{cursor: 'pointer'}} onClick={()=>setFilterOpen(false)} size={30} />
        </div>
        <div className="filter-btm">
            <div className="filter-left">
                <ul className="filter-left-ul">
                    <li className="filter-left-li">
                        Price
                    </li>
                    <li className="filter-left-li">
                        Special Features
                    </li>
                    <li className="filter-left-li">
                        Number of Cameras
                    </li>
                    <li className="filter-left-li">
                        Camera Quality
                    </li>
                    <li className="filter-left-li">
                        Camera Mega Pixels
                    </li>
                    <li className="filter-left-li">
                        Indoor / Outdoor
                    </li>
                </ul>
            </div>
            <div className="filter-right">
                <div className="filter-right-full">
                    <ul className="filter-item-ul">
                        <li className="filter-item-li">
                            <input type="checkbox" name="" id="" className="filter-cb" />
                            <label htmlFor="" className="filter-cb">HD</label>
                        </li>
                        <li className="filter-item-li">
                            <input type="checkbox" name="" id="" className="filter-cb" />
                            <label htmlFor="" className="filter-cb">DOME</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Filter