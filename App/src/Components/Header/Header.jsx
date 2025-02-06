import React, { useContext } from 'react'
import { FaMoneyBill, FaRegUser, FaShoppingBasket, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BsBasket } from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { setBottomNav } from '../../Functions/Ui/modalSlice';
import AuthContext from '../../context/AuthContext.context';

import logo from '../../Assets/logo/logo.png'
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Header = () => {

    const dispatch = useDispatch();
    const { loggedIn } = useContext(AuthContext)
    const setOpenNavBar = () => dispatch(setBottomNav());
    const { openSignup, setOpenSignup, getOrders, openLogin, setOpenLogin } = useContext(AuthContext);


    return (
        <>
            <nav class="nav">
                <div class="left">
                    <ul class="left-ul">
                        <NavLink to={'/'} ><li class="left-li underline-center">Home</li></NavLink>
                        <NavLink to={'/about'} ><li class="left-li underline-center">About</li></NavLink>
                        <NavLink to={'/contact'} ><li class="left-li underline-center">Contact</li></NavLink>
                    </ul>
                </div>
                <div class="mid">
                    <span class="logo-span">
                        <NavLink to={'/'} ><img src={logo} alt="logo of sewad info tech" class="logo-" /></NavLink>
                    </span>
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