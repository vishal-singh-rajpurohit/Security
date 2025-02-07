import React, { useContext, useEffect, useState } from 'react'
import MessageInbox from '../Modal/MessageInbox'
import { AiTwotoneMail } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openMessages, openReportBox } from '../../Functions/Ui/modalSlice'
import AuthContext from '../../context/AuthContext.context'
import { FaHamburger } from 'react-icons/fa'



const Profile = () => {
    const { profileOptions, setProfileOptions, sendVerificationMail, profileState, setProfileState } = useContext(AuthContext);

    // const [] = useState('init');
    const [resHi, setResHi] = useState(false)

    const dispatch = useDispatch();
    const setOpenMessages = () => dispatch(openMessages());
    const setOpenReport = () => dispatch(openReportBox());

    const { logout, userAvater, deleteAccount, getOrders } = useContext(AuthContext);

    const {
        userFirstName,
        userLastName,
        userEmail,
        userMobileNumber,
        userMobileNumber2,
        userType,
        userAddress,
        userCity,
        userPostCode,
        userState,
        userVerificationStatus,
        userUpiNumber,
        userTotalOrders,
        userActiveOrders,
        userPendingOrders,
        userTotalEarnings,
        userCraditPayments
    } = useContext(AuthContext);

    function changeProfileState(state) {
        setProfileState(state);
        setProfileOptions(false);
    }


    useEffect(() => {
        if (window.innerWidth < 950) {
            console.log("rest hi is tue");

            setResHi(true)
        } else {
            setResHi(false)
        }
    }, [window.innerWidth])

    return (
        <>
            <section class="profile-main">
                <div class="profile-left" style={{ display: resHi && profileOptions ? 'flex' : 'none' }}>
                    <ul class="profile-left-ul">
                        <div class="profile-left-li" onClick={() => changeProfileState('init')}>
                            <span class="profile-button-heading">Account Settings</span>
                            <span class="profile-button--text"
                            >details and about your profile</span>
                        </div>
                        <div class="profile-left-li" onClick={() => changeProfileState('noti')}>
                            <span class="profile-button-heading" onClick={() => setProfileState('noti')}>Notifications</span>
                            <span class="profile-button--text">reports , alerts notifications</span>
                        </div>
                        <div class="profile-left-li" onClick={async () => {
                            await sendVerificationMail();
                        }} >
                            <span class="profile-button-heading" >Payments</span>
                            <span class="profile-button--text">payments and rewards</span>
                        </div>
                        {/* <div class="profile-left-li" onClick={()=>changeProfileState('pass')}>
                            <span class="profile-button-heading"  onClick={()=>setProfileState('pass')}>Password & Security</span>
                            <span class="profile-button--text"
                            >details about personal information</span>
                        </div> */}
                        <div class="profile-left-li">
                            <span class="profile-button-heading" onClick={() => logout()}>Log Out</span>
                        </div>
                        <div class="profile-left-li res-ninefive">
                            <span class="profile-button-heading" onClick={() => setProfileOptions(false)}>Close</span>
                        </div>
                    </ul>
                </div>
                <div class="profile-left">
                    <ul class="profile-left-ul">
                        <div class="profile-left-li" onClick={() => changeProfileState('init')}>
                            <span class="profile-button-heading">Account Settings</span>
                            <span class="profile-button--text"
                            >details and about your profile</span>
                        </div>
                        <div class="profile-left-li" onClick={() => changeProfileState('noti')}>
                            <span class="profile-button-heading" onClick={() => setProfileState('noti')}>Notifications</span>
                            <span class="profile-button--text"
                            >reports , alerts notifications</span
                            >
                        </div>
                        <div class="profile-left-li" onClick={async () => {
                            await sendVerificationMail()
                        }} >
                            <span class="profile-button-heading" >Payments</span>
                            <span class="profile-button--text">payments and rewards</span>
                        </div>
                        {/* <div class="profile-left-li" onClick={()=>changeProfileState('pass')}>
                            <span class="profile-button-heading"  onClick={()=>setProfileState('pass')}>Password & Security</span>
                            <span class="profile-button--text"
                            >details about personal information</span>
                        </div> */}
                        <div class="profile-left-li">
                            <span class="profile-button-heading" onClick={() => logout()}>Log Out</span>
                        </div>
                        <div class="profile-left-li res-ninefive">
                            <span class="profile-button-heading" onClick={() => setProfileOptions(false)}>Close</span>
                        </div>
                    </ul>
                </div>
                <div class="profile-right" style={{ display: profileState === "init" ? 'inline' : 'none' }}>
                    <div class="profile-right-top">
                        <div class="profile-left-dp">
                            <span class="profile-dp-span"></span>
                        </div>
                        <div class="profile-mid">
                            <p class="verified-text text-success">Profile Verified</p>
                            <p class="verified-rank">
                                <span class="rank-span">Rank:</span>
                                <span class="rank-number">#44</span>
                            </p>
                        </div>
                        <div class="profile-right-upload">
                            <button class="upload-right-up">Upload</button>
                            <button class="upload-right-up op" onClick={() => setProfileOptions(true)}><FaHamburger /></button>
                        </div>
                    </div>
                    <div class="---right-info-text">
                        <li class="--info-text">
                            Your details will be conformed after review.
                        </li>
                    </div>
                    <div class="---right-main-area">
                        <div class="---right-heading-main">
                            <h1 class="---right-head--profile">Change User Information.</h1>
                        </div>
                        <div class="---right-details-form">
                            <div class="---double-inputs">
                                <div class="---dub-left-inputs">
                                    <label for="name" class="profile-leb">Full Name</label>
                                    <input type="text" name="name" value={userFirstName + " " + userLastName} placeholder="Vishal Singh" id="name" class="---profile-input" />
                                </div>
                                <div class="---dub-left-inputs">
                                    <label for="mail" class="profile-leb">Email Address</label>
                                    <input type="email" name="mail" value={userEmail} placeholder="vsgamer9595@gmail.com" id="mail" class="---profile-input"
                                    />
                                </div>
                            </div>
                            <div class="---single-input">
                                <div class="---sing-inputs">
                                    <label for="address" class="profile-leb">Address</label>
                                    <input type="text" name="address" value={userAddress} placeholder="kudi bhagtasni sector 4, jodhpur , Rajasthan" id="address" class="---profile-single--" />
                                </div>
                            </div>
                            <div class="---double-inputs">
                                <div class="---dub-left-inputs">
                                    <label for="mobile" class="profile-leb">Mobile Number</label>
                                    <input type="number" name="mobile" value={userMobileNumber} placeholder="900000898" id="mobile" class="---profile-input"
                                    />
                                </div>
                                <div class="---dub-left-inputs">
                                    <label for="City" class="profile-leb">City</label>
                                    <input type="text" name="City" value={userCity} placeholder="jodhpur" id="City" class="---profile-input" />
                                </div>
                            </div>
                            <div class="---double-inputs">
                                <div class="---dub-left-inputs">
                                    <label for="state" class="profile-leb">State</label>
                                    <input type="text" name="state" value={userState} placeholder="Rajasthan" id="state" class="---profile-input" />
                                </div>
                                <div class="---dub-left-inputs">
                                    <label for="pincode" class="profile-leb">Pin Code</label>
                                    <input type="number" name="pincode" value={userPostCode} placeholder="320055" id="pincode" class="---profile-input" />
                                </div>
                            </div>
                            <button className="cover-whole">Cancle</button>
                            <button class="cover-whole">Update Information</button>
                        </div>
                    </div>
                </div>
                <div class="profile-right" style={{ display: profileState === "noti" ? 'inline' : 'none' }}>
                    <div class="profile-right-top">
                        <div class="profile-left-dp">
                            <span class="profile-dp-span"></span>
                        </div>
                        <div class="profile-mid">
                            <p class="verified-text text-success">Profile Verified</p>
                            <p class="verified-rank">
                                <span class="rank-span">Rank:</span>
                                <span class="rank-number">#44</span>
                            </p>
                        </div>
                        <div class="profile-right-upload">
                            <button class="upload-right-up">Upload</button>
                            <button class="upload-right-up op" onClick={() => setProfileOptions(true)}><FaHamburger /></button>
                        </div>
                    </div>
                    <div class="---right-info-text">
                        <li class="--info-text">
                            here is your all notifications and reports.
                        </li>
                    </div>
                    <div class="---right-main-area">
                        <div class="---right-heading-main">
                            <h1 class="---right-head--profile">Your Notifications</h1>
                        </div>
                        <div class="---right-notifications">
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="---message-single">
                                <div class="--left-message-">
                                    <div class="noti-type">
                                        <span class="--u-type"></span>
                                        <span class="--noti-name">Report</span>
                                    </div>
                                    <div class="--message-text">
                                        <span class="message-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Iure beatae dolores ex nisi facere soluta ipsum laboriosam
                                            error vero iusto.
                                        </span>
                                    </div>
                                </div>
                                <div class="--right-message-">
                                    <div class="--right-message-date">
                                        <span class="date-time">12 - 2 - 2024</span>
                                    </div>
                                    <div class="--right-message-time">
                                        <span class="date-time">3 : 40 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-right" style={{ display: profileState === "pay" ? 'inline' : 'none' }}>
                    <div class="profile-right-top">
                        <div class="profile-left-dp">
                            <span class="profile-dp-span"></span>
                        </div>
                        <div class="profile-mid">
                            <p class="verified-text text-success">Profile Verified</p>
                            <p class="verified-rank">
                                <span class="rank-span">Rank:</span>
                                <span class="rank-number">#44</span>
                            </p>
                        </div>
                        <div class="profile-right-upload">
                            <button class="upload-right-up">Upload</button>
                            <button class="upload-right-up op" onClick={() => setProfileOptions(true)}><FaHamburger /></button>
                        </div>
                    </div>
                    <div class="---right-info-text">
                        <li class="--info-text">here is all payment details</li>
                    </div>
                    <div class="---right-main-area">
                        <div class="---right-heading-main">
                            <h1 class="---right-head--profile">Payment details and history</h1>
                        </div>
                        {
                            !userType || userType === "CUSTOMER" ?
                                <div class="---right-heading-main" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <li class="--info-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>No Payment Histyory found</li>
                                </div> :
                                <>
                                    <div class="payment-buttons">
                                        <button class="--payments-buttons">All Payments</button>
                                        <button class="--payments-buttons">Pending</button>
                                        <button class="--payments-buttons">history</button>
                                    </div>
                                    <button class="cover-whole">Total: $5000</button>
                                    <div class="---right-notifications">
                                        <div class="---message-single">
                                            <div class="--left-message-">
                                                <div class="noti-type">
                                                    <span class="--u-type"></span>
                                                    <span class="--noti-name">idido4545jhjhd</span>
                                                </div>
                                                <div class="--payment-points">
                                                    <span class="pay--payment">Payment:$50</span>
                                                    <span class="pay--payment">Point:30</span>
                                                </div>
                                            </div>
                                            <div class="--right-message-">
                                                <div class="--right-message-date">
                                                    <span class="date-time">12 - 2 - 2024</span>
                                                </div>
                                                <div class="--right-message-time">
                                                    <span class="Status">Pending</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }


                    </div>
                </div>
                <div class="profile-right" style={{ display: profileState === "pass" ? 'inline' : 'none' }}>
                    <div class="profile-right-top">
                        <div class="profile-left-dp">
                            <span class="profile-dp-span"></span>
                        </div>
                        <div class="profile-mid">
                            <p class="verified-text text-success">Profile Verified</p>
                            <p class="verified-rank">
                                <span class="rank-span">Rank:</span>
                                <span class="rank-number">#44</span>
                            </p>
                        </div>
                        <div class="profile-right-upload">
                            <button class="upload-right-up">Upload</button>
                            <button class="upload-right-up op" onClick={() => setProfileOptions(true)}><FaHamburger /></button>
                        </div>
                    </div>
                    <div class="---right-info-text">
                        <li class="--info-text">you must need Otp to check</li>
                    </div>
                    <div class="---right-main-area">
                        <div class="---right-heading-main">
                            <h1 class="---right-head--profile">Passsword & Security</h1>
                        </div>
                        <div class="---right-details-form">
                            <div class="---single-input">
                                <div class="---sing-inputs">
                                    <label for="address" class="profile-leb">Passsword</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="***************"
                                        id="password"
                                        class="---profile-single--"
                                    />
                                </div>
                            </div>
                            <div class="---dbl-img-inputs">
                                <div class="--dbl-img-single">
                                    <label for="address" class="profile-leb">Aadhar / Id</label>
                                    <div class="aadhar-img">
                                        <img
                                            src="./Assets/adharexample.jpg"
                                            alt=""
                                            class="aadhar-pan"
                                        />
                                    </div>
                                </div>
                                <div class="--dbl-img-single">
                                    <label for="address" class="profile-leb">PAN Card</label>
                                    <div class="aadhar-img">
                                        <img
                                            src="./Assets/adharexample.jpg"
                                            alt=""
                                            class="aadhar-pan"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile