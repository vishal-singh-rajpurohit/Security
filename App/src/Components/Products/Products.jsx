import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenFilter } from '../../Functions/Ui/modalSlice'
import { MdAddShoppingCart, MdCurrencyRupee } from 'react-icons/md'
import {CiFilter} from 'react-icons/ci'
import logo from '../../Assets/logo/logo.png'
import AuthContext from '../../context/AuthContext.context';
import NavModal from '../Modal/NavModal';
import Filter from '../Modal/Filter';

// TESTING THE UI

const Products = () => {

    const { products, pageNumber, isFilterOn, loggedIn, userType, tempUserType, filterAts, filterKeys, filterObject, setPageNumber, proProducts } = useContext(AuthContext);
    const { addToCart, placeOrder, selectProduct, setFilterOpen, serveProducts, setFilterItems, setFilterValues, serveFilterProducts, servePremium } = useContext(AuthContext);
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

    useEffect(() => {
        servePremium(userType || tempUserType);
    }, [])



    return (
        <>
            <NavModal />
            <section class="slide-box">
                <div class="--slide">
                    <div class="left--slide">
                        <div class="left--slide-up">
                            <h2 class="slide-det-text">Protect What Matters with Our Expert CCTV Services</h2>
                        </div>
                        <div class="left--slide-mid">
                            <p class="slide-det-para">
                            We offer top-quality CCTV installation, maintenance, and monitoring solutions to keep your home and business safe. Trust our experts for reliable security 24/7.
                            </p>
                        </div>
                        <div class="left--slide-down">
                            <a href='#products' ><button class="btn-lite">Buy Now</button></a>
                            <NavLink to={'premium'} ><button class="btn-dark">Explore More</button></NavLink>
                        </div>
                    </div>
                    <div class="right--slide">
                        <img
                            src={logo}
                            alt="Dome cctv camera"
                            class="slide--image"
                        />
                    </div>
                </div>
            </section>
            <section class="product-main-">
                <div class="product-premium-text">
                    <h3 class="premium">Premium Products</h3>
                    <NavLink to={'/premium'} ><span class="showMore">Show More</span></NavLink>
                </div>
                <div class="prodcut-overflow-y">
                    <div class="product-card-overflow">
                        {
                            proProducts && proProducts.map((prodcut) => (
                                <div class="premium-card" key={prodcut._id}>
                                    <div class="premium-card-disp" onClick={() => selectProduct(prodcut._id)}>
                                        <img
                                            src={prodcut.FrontImage}
                                            alt=""
                                            class="--premium-image"
                                        />
                                    </div>
                                    <div class="premium-card-details">
                                        <div class="--premium-det-title">
                                            <p class="--premium-p" style={{ cursor: 'pointer' }} onClick={() => selectProduct(prodcut._id)}>
                                                {
                                                    prodcut.ProductName
                                                }
                                            </p>
                                        </div>
                                        <div class="--premium-det-rating" onClick={() => selectProduct(prodcut._id)}>* 4.5 (15 reviews)</div>
                                        <div class="--premium-cart-price">
                                            <div class="--premium-price">$ 250</div>
                                            <div class="--premium-cart" onClick={() => addToCart(prodcut._id)}><MdAddShoppingCart /></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* <section class="Offers-main">
                <div class="offer-sub">
                    <div class="offer-left">
                        <div class="--offer-image-box">
                            <img
                                src={tempCam}
                                alt="single dome offer"
                                class="-offer-img-box"
                            />
                        </div>
                        <div class="--offer-text">
                            <div class="-offer-text-heading">
                                <p class="--offer-heading">Lorem ipsum dolopr sityyue ametgg.</p>
                            </div>
                            <div class="-offer-text-small">
                                <p class="-offer-para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Molestias voluptatem magnam vero accusamus! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Soluta aperiam tempore
                                    a?
                                </p>
                            </div>
                            <div class="left--slide-down">
                                <button class="btn-dark hover-pink">Take a Look</button>
                            </div>
                        </div>
                    </div>
                    <div class="offer-right">
                        <div class="offer-right-top bg-purple">
                            <div class="-offer-left">
                                <div class="--offer-text-heading">
                                    <p class="--offer-heading-left">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="--offer-text-p">
                                    <p class="--offer-det">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                        inventore quaerat vitae!
                                    </p>
                                </div>
                            </div>
                            <div class="-offer-fight">
                                <img
                                    src={tempCam}
                                    alt="offer image"
                                    class="offer--img"
                                />
                            </div>
                        </div>
                        <div class="offer-right-top bg-d-skublue">
                            <div class="-offer-left">
                                <div class="--offer-text-heading">
                                    <p class="--offer-heading-left">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="--offer-text-p">
                                    <p class="--offer-det">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                        inventore quaerat vitae!
                                    </p>
                                </div>
                            </div>
                            <div class="-offer-fight">
                                <img src={tempCam} alt="offer image" class="offer--img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section class="product-main-" id='products'>
                <div class="product-premium-text">
                    <h3 class="premium">Shop</h3>
                    {/* <span class="showMore"  onClick={()=>setFilterOpen(true)}><li class="right-li" style={{listStyleType: 'none'}}><CiFilter size={30} /></li></span> */}
                </div>
                <Filter  />
                <div class="prodcut-grid-">
                    {
                        products && products.map((product) => (
                            <div class="premium-card2">
                                <div class="premium-card-disp" onClick={() => selectProduct(product._id)}>
                                    <img src={product.FrontImage} alt="" class="--premium-image" />
                                </div>
                                <div class="premium-card-details">
                                    <div class="--premium-det-title" style={{ cursor: 'pointer' }} onClick={() => selectProduct(product._id)}>
                                        <p class="--premium-p">
                                            {product.ProductName}
                                        </p>
                                    </div>
                                    <div class="--premium-det-rating" onClick={() => selectProduct(product._id)}>* 4.5 (15 reviews)</div>
                                    <div class="--premium-cart-price">
                                        <div class="--premium-price"><MdCurrencyRupee size={10}/> {product.PriceForCustomers}</div>
                                        <div class="--premium-cart" onClick={() => addToCart(product._id)}><MdAddShoppingCart /></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default Products