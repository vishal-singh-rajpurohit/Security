import React, { useContext } from 'react'
import './shop.css'
import '../../../css/Projucts.css'
import b from "../../../Assets/Cameras/c3.jpeg"
import { BiStar } from 'react-icons/bi'
import { GoReport } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { openReportBox } from '../../../Functions/Ui/modalSlice'
import AuthContext from '../../../context/AuthContext.context'

const Shop = () => {
    const dispatch = useDispatch();
    const setOpenReport = () => dispatch(openReportBox());

    const { product, loggedIn, userType} = useContext(AuthContext);

    return (
        <main className='shop'>
            <section className="shop-page">
                <section className="product-display">
                    <div className="main-display">
                        <img src={b} alt="" className="display-image" />
                    </div>
                    <div className="list-of-display">
                        <ul className="display-ul">
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                            <li className="display-li">
                                <span className="image-little-display"></span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="right-details-of-shop">
                    <div className="details-box">
                        <div className="shop-product-name">
                            <h1 className="product-name-shop">
                                {
                                    product.ProductName
                                }
                            </h1>
                            <p className="last-orders">total 1500 orders last month</p>
                        </div>
                        <div className="pricesing">
                            <div className="price">
                                <span className="price">
                                    <span className="rupee">
                                        <span className="symbol-rupee">&#x20b9;</span>
                                        <span className="pri">
                                            {
                                                !loggedIn ?
                                                    product.PriceForCustomers
                                                    :
                                                    userType === "DEALER" ? product.PriceForDealers :
                                                        userType === "INSTALLER" ? product.PriceForInstallers :
                                                            product.PriceForCustomers
                                            }
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="taxes">
                                Inclusive of all taxes
                            </div>
                        </div>
                        <div className="basic-info">
                            <div className="info-box">
                                <div className="info-box-shop">
                                    <div className="info-key">Brand</div>
                                    <div className="info-value">CP PLUS</div>
                                </div>
                                <div className="info-box-shop">
                                    <div className="info-key">Connectivity</div>
                                    <div className="info-value">Ethernet</div>
                                </div>
                                <div className="info-box-shop">
                                    <div className="info-key">Video Capture Resolution</div>
                                    <div className="info-value">1080N</div>
                                </div>
                                <div className="info-box-shop">
                                    <div className="info-key">Spetial Featues</div>
                                    <div className="info-value">For any updates or enquiry contact me given number - {9509075612}</div>
                                </div>
                                <div className="info-box-shop">
                                    <div className="info-key">Number of Channels</div>
                                    <div className="info-value">5</div>
                                </div>
                            </div>
                        </div>
                        <div className="about-this-item">
                            <h3 className="item-about-text">About this item</h3>
                            <ul className="sbout-ul">
                                <li className="about-li">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ullam delectus velit suscipit sunt enim repellendus voluptates, culpa dolore harum dolorum. Modi, eveniet illo pariatur aspernatur earum iste sunt quas explicabo blanditiis dolores! Saepe debitis, tenetur numquam veritatis perspiciatis excepturi nemo voluptatum enim labore. Facilis magni in dolor commodi magnam corrupti dignissimos neque aspernatur veritatis.
                                </li>
                                <li className="about-li">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ullam delectus velit suscipit sunt enim repellendus voluptates, culpa dolore harum dolorum. Modi, eveniet illo pariatur aspernatur earum iste sunt quas explicabo blanditiis dolores! Saepe debitis, tenetur numquam veritatis perspiciatis excepturi nemo voluptatum enim labore. Facilis magni in dolor commodi magnam corrupti dignissimos neque aspernatur veritatis.
                                </li>
                                <li className="about-li">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ullam delectus velit suscipit sunt enim repellendus voluptates, culpa dolore harum dolorum. Modi, eveniet illo pariatur aspernatur earum iste sunt quas explicabo blanditiis dolores! Saepe debitis, tenetur numquam veritatis perspiciatis excepturi nemo voluptatum enim labore. Facilis magni in dolor commodi magnam corrupti dignissimos neque aspernatur veritatis.
                                </li>
                            </ul>
                            <div className="report-issue">
                                <p className="report-text" onClick={setOpenReport}>
                                    <GoReport color='#063b8a' /> report an issue related to this item
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="purchase card">
                        <div className="card-shop">
                            <div className="card-details">
                                <div className="price-of-card">
                                    <span className="price">&#8377; 15000</span>
                                </div>
                                <div className="delivaey-date">
                                    <span className="date-text">
                                        date will be showen after the conformation
                                    </span>
                                </div>
                            </div>
                            <div className="quantity-meter">
                                <div className="Quantity-selection">
                                    <select name="" id="" className="shop-quantity">
                                        <option value="" className='shop-options'>1</option>
                                        <option value="" className='shop-options'>2</option>
                                        <option value="" className='shop-options'>3</option>
                                        <option value="" className='shop-options'>4</option>
                                        <option value="" className='shop-options'>5</option>
                                        <option value="" className='shop-options'>6</option>
                                        <option value="" className='shop-options'>7</option>
                                        <option value="" className='shop-options'>8</option>
                                        <option value="" className='shop-options'>9</option>
                                        <option value="" className='shop-options'>10</option>
                                    </select>
                                </div>
                            </div>
                            <div className="shop-card-buttons">
                                <button className="btn-order save-button btn-order2"><BiStar /> save</button>
                                <button className="btn-order btn-order2">Order Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Shop;