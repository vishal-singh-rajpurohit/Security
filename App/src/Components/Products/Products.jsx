import React, { useContext, useEffect, useState } from 'react'
import '../../css/Projucts.css'
import { BiCustomize, BiStar } from 'react-icons/bi';
import { FaArrowDown, FaFilter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenFilter } from '../../Functions/Ui/modalSlice'
import AuthContext from '../../context/AuthContext.context';
import { MdTransitEnterexit } from 'react-icons/md';

const Products = () => {

    const { products, pageNumber, isFilterOn, loggedIn, userType, tempUserType, filterAts, filterKeys, filterObject, setPageNumber, proProducts } = useContext(AuthContext);
    const { addToCart, selectProduct, serveProducts, setFilterItems, setFilterValues, serveFilterProducts, placeOrder, servePremium } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const dispatch = useDispatch();
    const openFilter = useSelector((state) => state.modals.openBottomFilter);

    const SetOpenFilter = () => {
        setFilterItems("NumberOfCameras")
        dispatch(setOpenFilter())
    };

    const handleCheckBox = async (value) => {
        setSelectedOption(selectedOption === value ? null : value);
        if (selectedOption) {
            await serveFilterProducts(
                pageNumber,
                filterObject,
                userType || tempUserType
            );
        }
        else if (!selectedOption) {
            await serveFilterProducts(
                pageNumber,
                filterObject,
                userType || tempUserType
            );
        }
    }


    // PAGE NUMBERS AND PRODCUT SERVING
    useEffect(() => {
        
        serveProducts(
            pageNumber,
            {},
            userType || tempUserType
        );
    }, [pageNumber, isFilterOn,]);

    useEffect(()=>{
        servePremium(userType || tempUserType);
    },[])



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
                        {/* <button className="apply" id="apply">Apply</button> */}
                        <button-bottom-filter-close onClick={SetOpenFilter} ><MdTransitEnterexit size={40} cursor={'pointer'} /></button-bottom-filter-close>
                    </div>
                    <div className="product-filter-bottom-slid">
                        <div className="lefl-b-filter">
                            <ul className="filter-slide-bottom">
                                <li className="bottom-filter-item" onClick={() => setFilterItems("NumberOfCameras")}>Number of Cameras</li>
                                <li className="bottom-filter-item" onClick={() => setFilterItems("CameraType")}>Camera Type</li>
                                <li className="bottom-filter-item" onClick={() => setFilterItems("CameraQuality")}>Camera Quality</li>
                                <li className="bottom-filter-item" onClick={() => setFilterItems("MegaPixels")}>Mega Pixel</li>
                                <li className="bottom-filter-item" onClick={() => setFilterItems("IndoorOutdoor")}>Indoor / Outdoor</li>
                            </ul>
                        </div>
                        <div className="rigth-b-filter">
                            <div className="values-of-filter-bottom">
                                <ul className="filter-tem">
                                    <ul className="filter-cb-ul">
                                        <li className="filter-li"> <p className="bold-text">filter items by:</p></li>
                                        {
                                            filterAts?.map((atts) => <li className="filter-li btm-li-items">
                                                <input type="checkbox" name="sp1" id={atts} onClick={() => setFilterValues(filterKeys, atts)} checked={selectedOption === atts} onChange={() => handleCheckBox(atts)} className="filter-cb-btm-filter" />
                                                <label htmlFor="sp1" onClick={() => setFilterValues(filterKeys, atts)} >{atts}</label>
                                            </li>)
                                        }

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
                            {
                                proProducts?.map((product) => {
                                    <div className="card" key={product._id}>
                                        <div className="image-of-card-box">
                                            <span className="card-image-box" style={{backgroundImage : `url(${product.FrontImage})`}}>
                                                <div className="premium-txt">Premium</div>
                                            </span>
                                        </div>
                                        <div className="card-details">
                                            <div className="price-o-card">
                                                <span className="rupee">&#8377;</span>
                                                <span className="ammount">
                                                {
                                                            !loggedIn ?
                                                                product?.PriceForCustomers
                                                                :
                                                                userType === "DEALER" ? product?.PriceForDealers :
                                                                    userType === "INSTALLER" ? product?.PriceForInstallers :
                                                                        product?.PriceForCustomers
                                                        }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                        <div className="list-style-products-display">
                            {
                                products?.map((product, index) => <div className="box1" id="b1" key={product._id}>
                                    <div className="image-of-product">
                                        <span className="image" >
                                            <img src={product.FrontImage} alt="" className="box-1-product-image" />
                                        </span>
                                    </div>
                                    <div className="description">
                                        <div className="product-description">
                                            <div className="for-overflow">
                                                <h2 className="product-name">{product.ProductName}</h2>
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
                                                                product?.PriceForCustomers
                                                                :
                                                                userType === "DEALER" ? product?.PriceForDealers :
                                                                    userType === "INSTALLER" ? product?.PriceForInstallers :
                                                                        product?.PriceForCustomers
                                                        }
                                                    </span></span>
                                                </span>
                                            </div>
                                            <div className="save-button">
                                                <button className="btn-order save-button" disabled={loggedIn ? false : true} onClick={() => addToCart(product._id)}><BiStar /> save</button>
                                            </div>
                                            <div className="button">
                                                <button className="btn-order" onClick={() => selectProduct(product._id, (userType || tempUserType))} >Know More</button>
                                                <button className="btn-order" onClick={() => placeOrder(product._id)} >Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div className="load-more">
                            <button className="load-more-button" onClick={() => setPageNumber(pageNumber + 1)}><FaArrowDown /> Show More</button>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Products