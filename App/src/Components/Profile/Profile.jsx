import React, { useContext } from 'react'
import './profile.css'
import MessageInbox from '../Modal/MessageInbox'
import { AiTwotoneMail } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openMessages, openReportBox } from '../../Functions/Ui/modalSlice'
import AuthContext from '../../context/AuthContext.context'



const Profile = () => {

    const dispatch = useDispatch();
    const setOpenMessages = () => dispatch(openMessages());
    const setOpenReport = () => dispatch(openReportBox());

    const {logout, userAvater, deleteAccount} = useContext(AuthContext)

    const {
        userFirstName,
        userLastName,
        // userEmail,
        // userMobileNumber,
        // userMobileNumber2,
        // userAvater,
        // userType,
        // userAddress,
        // userCity,
        // userPostCode,
        // userVerificationStatus,
        // userUpiNumber,
        userTotalOrders,
        userActiveOrders,
        userPendingOrders,
        userTotalEarnings,
        userCraditPayments
    } = useContext(AuthContext);

    return (
        <>
            <MessageInbox />
            <main className="profile-page">
                <div className="-profile-page">
                    <div className="top1-part">
                        <div className="left-part-top1">
                            <div className="image-box">
                                <span className="-image-profile" style={{backgroundImage: `url(${userAvater})`}}></span>
                            </div>
                        </div>
                        <div className="right-part-top1">
                            <div className="details-box-top1">
                                <div className="details-box-up">
                                    <div className="box-name">
                                        <p className="user-name">{`${userFirstName} ${userLastName}`}</p>
                                    </div>
                                    <div className="box-mail">
                                        <AiTwotoneMail style={{cursor: 'pointer'}} onClick={setOpenMessages} size={25} color='red' />
                                    </div>
                                </div>
                                <div className="details-box-bottom">
                                    <div className="orders-meter-box">
                                        <div className="meter-title">
                                            <span className="title-meter">Total Order</span>
                                        </div>
                                        <div className="meter-reading">
                                            <span className="reading-meter">{userTotalOrders}</span>
                                        </div>
                                    </div>
                                    <div className="orders-meter-box">
                                        <div className="meter-title">
                                            <span className="title-meter">Active Order</span>
                                        </div>
                                        <div className="meter-reading">
                                            <span className="reading-meter">{userActiveOrders}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="profile-blg">
                        <section className="left-profile">
                            <div className="section-buttons">
                                <ul className="profile-buttons-ul">
                                    <li className="profile-button-li">
                                        <button className="button-li">Orders</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li">Earnings</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li">History</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li" onClick={setOpenReport}>Report</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li">Share</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li" onClick={()=>deleteAccount()}>Delete</button>
                                    </li>
                                    <li className="profile-button-li">
                                        <button className="button-li" onClick={logout}>Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="Right-profile">
                            <section className="right-profile-box">
                                <div className="heading-of-page">
                                    <p className="earnings">Earnings</p>
                                </div>
                                <div className="earnings-monitor-box">
                                    <div className="earning-meter">
                                        <div className="earning-meter-left">
                                            <div className="earning-meter-heading">
                                                <p className="earinging-meter-text-heading">Total Earnings</p>
                                            </div>
                                            <div className="earning-meter-reading">
                                                <span className="earingin-meter-reading">{userTotalEarnings}</span>
                                            </div>
                                        </div>
                                        <div className="earning-meter-left">
                                            <div className="earning-meter-heading">
                                                <p className="earinging-meter-text-heading">Wallet</p>
                                            </div>
                                            <div className="earning-meter-reading">
                                                <span className="earingin-meter-reading">{userCraditPayments}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="earnings-monitor-box my-orders" id="myorders">
                                    <div className="earning-meter-left orders-left-earning">
                                        <div className="earning-meter-heading">
                                            <p className="earinging-meter-text-heading">My Orders</p>
                                        </div>
                                        <div className="pending-orders-text-box">
                                            <p className="pending-text">Total {userPendingOrders} Orders Pending</p>
                                        </div>
                                        <div className="orders-list-my-orders">
                                            <ul className="order-list-ul">
                                                <li className="order-list-li">
                                                    <div className="single-order-box">
                                                        <div className="text-order-single-">
                                                            <div className="text-2">
                                                                <div className="text-2">
                                                                    <span className="price-text">Id: </span>
                                                                    <span className="price-value">8776e9q7e6w8</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-order-single-">
                                                            <span className="single-price">
                                                                <span className="price-text">Price: </span>
                                                                <span className="price-value">30000</span>
                                                            </span>
                                                            <span className="single-price">
                                                                <span className="price-text">Pending: </span>
                                                                <span className="price-value">15000</span>
                                                            </span>
                                                        </div>
                                                        <div className="text-order-single-">
                                                            <div className="status">
                                                                <span className="status-text">Status: </span>
                                                                <span className="status-text-value">CONFORMED</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-order-single- s2">
                                                            <div className="status">
                                                                <button className="cancle-order">Cancel</button>
                                                            </div>
                                                            <div className="status">
                                                                <button className="cancle-order">Report</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section className="earnings-monitor-box my-orders" id="myorders">
                                    <div className="earning-meter-left orders-left-earning">
                                        <div className="earning-meter-heading">
                                            <p className="earinging-meter-text-heading">User History</p>
                                        </div>
                                        <div className="history-buttons">
                                            <div className="hist-btns-box">
                                                <div className="hist">
                                                    <button className="hist-button">Orders</button>
                                                </div>
                                                <div className="hist">
                                                    <button className="hist-button">Payments</button>
                                                </div>
                                                <div className="hist">
                                                    <button className="hist-button">Reports</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="orders-list-my-orders">
                                            <ul className="order-list-ul">
                                                <li className="order-list-li">
                                                    <div className="single-order-box">
                                                        <div className="text-order-single-">
                                                            <div className="text-2">
                                                                <span className="price-text">Id: </span>
                                                                <span className="price-value">8776e9q7e6w8</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-order-single-">
                                                            <span className="single-price">
                                                                <span className="price-text">Ammount: </span>
                                                                <span className="price-value">30000</span>
                                                            </span>
                                                            <span className="single-price">
                                                                <span className="price-text">Pending: </span>
                                                                <span className="price-value">15000</span>
                                                            </span>
                                                        </div>
                                                        <div className="text-order-single-">
                                                            <div className="status">
                                                                <span className="status-text">Status: </span>
                                                                <span className="status-text-value">CONFORMED</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Profile