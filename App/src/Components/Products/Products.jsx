import React, { useContext, useEffect } from 'react'
import '../../css/Projucts.css'
import a from '../../Assets/Cameras/v.webp'
import { BiCustomize, BiStar } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { BsArrow90DegDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenFilter } from '../../Functions/Ui/modalSlice'
import AuthContext from '../../context/AuthContext.context';

const Products = () => {

    const { products, pageNumber, isFilterOn, filters, serveProducts, loggedIn, userType, selectProduct } = useContext(AuthContext);


    const dispatch = useDispatch();
    const openFilter = useSelector((state) => state.modals.openBottomFilter)

    const SetOpenFilter = () => dispatch(setOpenFilter());

    // const handleCheckboxChange = (e) => {
    //     setSelected(e.target.name);
    // };

    useEffect(async () => {
        await serveProducts(pageNumber, isFilterOn, filters);
    }, []);

    return (
        <>
            <main style={{ backgroundColor: 'white' }}>
                {/* responsive filter */}
                <section className="product-filter-responsive">
                    <div className="product-filter-">
                        <button className="filter-button" onClick={SetOpenFilter} >filters <FaFilter /></button>
                    </div>
                </section>
                <section className="product-filter-modal" style={{ display: openFilter ? 'flex' : 'none', zIndex: '999' }}>
                    <div className="close-key-filter-bottom">
                        <button-bottom-filter-close onClick={SetOpenFilter} ><BsArrow90DegDown /></button-bottom-filter-close>
                    </div>
                    <div className="product-filter-bottom-slid">
                        <div className="lefl-b-filter">
                            <ul className="filter-slide-bottom">
                                <li id='active-filter' className="bottom-filter-item">Price</li>
                                <li className="bottom-filter-item">Price</li>
                                <li className="bottom-filter-item">Price</li>
                                <li className="bottom-filter-item">Price</li>
                                <li className="bottom-filter-item">Price</li>
                            </ul>
                        </div>
                        <div className="rigth-b-filter">
                            <div className="values-of-filter-bottom">
                                <ul className="filter-tem">
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li"> <p className="bold-text">filter items by Price</p></li>
                                        <li className="filter-li btm-li-items">
                                            <input type="checkbox" name="sp1" id="" className="filter-cb-btm-filter" />
                                            <label htmlFor="sp1">Night Vision</label>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* main prodcut */}
                <section className="product-box">
                    <div className="filter-area">
                        <div className="--filter">
                            <div className="custon-button">
                                <NavLink to={"custom/customize"} ><button className="custom"><BiCustomize /> Custom Setup</button></NavLink>
                            </div>
                            <form action="" className="filter">
                                <div className="box-filter">
                                    <p className="filter-heading">Sort by Price: </p>
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li">
                                            <input type="checkbox"
                                                name="filterGroup"
                                                // checked={selected === "filterGroup"}
                                                // onChange={handleCheckboxChange}
                                                id="" className="filter-cb" />
                                            <label htmlFor="sp1">Above 15000</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="filterGroup2"
                                                // onChange={handleCheckboxChange} 
                                                // checked={selected === "filterGroup2"} 
                                                id="" className="filter-cb" />
                                            <label htmlFor="sp2">20000 - 25000</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="filterGroup3"
                                                // onChange={handleCheckboxChange}
                                                //  checked={selected === "filterGroup3"} 
                                                id="" className="filter-cb" />
                                            <label htmlFor="sp3">25000 - 300000</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="filterGroup4"
                                                // onChange={handleCheckboxChange}
                                                //  checked={selected === "filterGroup4"}
                                                id="" className="filter-cb" />
                                            <label htmlFor="sp4">Above 30000</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-filter">
                                    <p className="filter-heading">Special Features</p>
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li">
                                            <input type="checkbox" name="sp1" id="" className="filter-cb" />
                                            <label htmlFor="sp1">Night Vision</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="sp2" id="" className="filter-cb" />
                                            <label htmlFor="sp2">2 Way Audio</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="sp3" id="" className="filter-cb" />
                                            <label htmlFor="sp3">Built In Light</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="sp4" id="" className="filter-cb" />
                                            <label htmlFor="sp4">HD Resolution</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="sp5" id="" className="filter-cb" />
                                            <label htmlFor="sp5">Image Sensor</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-filter">
                                    <p className="filter-heading">Connectivity Technology</p>
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li">
                                            <input type="checkbox" name="conn1" id="" className="filter-cb" />
                                            <label htmlFor="conn1">Wired</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="conn2" id="" className="filter-cb" />
                                            <label htmlFor="conn2">Wireless</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-filter">
                                    <p className="filter-heading">Number of Cameras</p>
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">3 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">4 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">5 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">6 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">7 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">8 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">9 Camera</label>
                                        </li>
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">10 Camera</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-filter">
                                    <p className="filter-heading">Camera Brands</p>
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li">
                                            <input type="checkbox" name="brand" id="" className="filter-cb" />
                                            <label htmlFor="brand">Top Brands</label>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="product-container">
                        <div className="card-style-display">
                            <div className="card">
                                <div className="image-of-card-box">
                                    <span className="card-image-box"></span>
                                </div>
                                <div className="card-details">
                                    <p className="text-o-cart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo fugiat quod obcaecati ratione sint beatae tenetur? Eos, illum cupiditate!</p>
                                    <div className="price-o-card">
                                        <span className="rupee">&#8377;</span>
                                        <span className="ammount">15000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-of-card-box">
                                    <span className="card-image-box"></span>
                                </div>
                                <div className="card-details">
                                    <p className="text-o-cart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo fugiat quod obcaecati ratione sint beatae tenetur? Eos, illum cupiditate!</p>
                                    <div className="price-o-card">
                                        <span className="rupee">&#8377;</span>
                                        <span className="ammount">15000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-of-card-box">
                                    <span className="card-image-box"></span>
                                </div>
                                <div className="card-details">
                                    <p className="text-o-cart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo fugiat quod obcaecati ratione sint beatae tenetur? Eos, illum cupiditate!</p>
                                    <div className="price-o-card">
                                        <span className="rupee">&#8377;</span>
                                        <span className="ammount">15000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-of-card-box">
                                    <span className="card-image-box"></span>
                                </div>
                                <div className="card-details">
                                    <p className="text-o-cart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo fugiat quod obcaecati ratione sint beatae tenetur? Eos, illum cupiditate!</p>
                                    <div className="price-o-card">
                                        <span className="rupee">&#8377;</span>
                                        <span className="ammount">15000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-style-products-display">
                            {
                                products?.map((product) =>
                                    <div className="box1" id="b1" key={product[0]._id} onClick={()=>selectProduct(product[0]._id)}>
                                        <div className="image-of-product">
                                            <span className="image" >
                                                <img src={product[0].FrontImage} alt="" className="box-1-product-image" />
                                            </span>
                                        </div>
                                        <div className="description">
                                            <div className="product-description">
                                                <div className="for-overflow">
                                                    <h2 className="product-name">{product[0].ProductName}</h2>
                                                </div>
                                                <div className="total-orders">
                                                    <span className="last-orders">total 1500 orders last month</span>
                                                </div>
                                                <div className="price">
                                                    <span className="price">
                                                        <span className="rupee"> <span className="symbol-rupee">&#x20b9;</span><span
                                                            className="pri">
                                                            {
                                                                !loggedIn ?
                                                                    product[0].PriceForCustomers
                                                                    :
                                                                    userType === "DEALER" ? product[0].PriceForDealers :
                                                                        userType === "INSTALLER" ? product[0].PriceForInstallers :
                                                                            product[0].PriceForCustomers
                                                            }
                                                        </span></span>
                                                    </span>
                                                </div>
                                                <div className="save-button">
                                                    <button className="btn-order save-button"><BiStar /> save</button>
                                                </div>
                                                <div className="button">
                                                    <button className="btn-order" onClick={()=>selectProduct(product[0]._id)} >Know More</button>
                                                    <button className="btn-order">Book Installation</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            {/* <div className="box1" id="b1">
                                <div className="image-of-product">
                                    <span className="image" >
                                        <img src={a} alt="" className="box-1-product-image" />
                                    </span>
                                </div>
                                <div className="description">
                                    <div className="product-description">
                                        <div className="for-overflow">
                                            <h2 className="product-name">4 IP Camera Setup, Full Colour with Audio Camera 2 Way Talk
                                                (Communication) , 500gb Hard Disk </h2>
                                        </div>
                                        <div className="total-orders">
                                            <span className="last-orders">total 1500 orders last month</span>
                                        </div>
                                        <div className="price">
                                            <span className="price">
                                                <span className="rupee"> <span className="symbol-rupee">&#x20b9;</span><span
                                                    className="pri">3000</span></span>
                                            </span>
                                        </div>
                                        <div className="save-button">
                                            <button className="btn-order save-button"><BiStar /> save</button>
                                        </div>
                                        <div className="button">
                                            <button className="btn-order">Know More</button>
                                            <button className="btn-order">Book Installation</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Products