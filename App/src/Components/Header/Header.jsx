import React, { useContext } from 'react'
import { FaMoneyBill, FaRegUser, FaShoppingBasket, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BsBasket } from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { setBottomNav } from '../../Functions/Ui/modalSlice';
import AuthContext from '../../context/AuthContext.context';

import logo from '../../Assets/logo/logo2.png'
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Header = () => {

    const dispatch = useDispatch();
    const { loggedIn } = useContext(AuthContext)
    const setOpenNavBar = () => dispatch(setBottomNav());
    const { openSignup, setOpenSignup, getOrders, openLogin, setOpenLogin , theme } = useContext(AuthContext);


    return (
        <>
            <nav class="nav">
                <div class="left">
                    <ul class="left-ul">
                        <NavLink to={'/'} ><li class="left-li underline-center">Home</li></NavLink>
                        <NavLink to={'/about'} ><li class="left-li underline-center">About</li></NavLink>
                        <NavLink to={'/terms'} ><li class="left-li underline-center">Privatcy Policy</li></NavLink>
                        {/* <a href="https://www.instagram.com/sewad.infotech" target='_blank'><li class="left-li underline-center">Contact</li></a> */}
                        {/* <a href="google.com" target='_blank'><li class="left-li underline-center">Contact</li></a> */}
                    </ul>
                </div>
                <div class={`mid ${theme? '' : 'bg-dark'}`}>
                    <span class="logo-span">
                        <NavLink to={'/'} ><img src={logo} alt="logo of sewad info tech" class="logo-" /></NavLink>
                    </span>
                    <NavLink to={'/'} ><p className="logo-text">Sewad Infotech</p></NavLink>
                </div>
                <div class="right">
                    <ul class="right-ul">
                        <li class="right-li" onClick={() => getOrders()}><BsBasket size={20} /></li>
                        {
                            loggedIn ?
                                <NavLink to={'/user/profile'}><li class="right-li"><FaRegUser size={20} /></li></NavLink> :
                                <li class="right-li" onClick={() => setOpenSignup(true)}><FaRegUser size={20} /></li>
                        }
                        <NavLink to={'/shop/cart'}><li class="right-li"><MdOutlineAddShoppingCart size={20} /></li></NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header