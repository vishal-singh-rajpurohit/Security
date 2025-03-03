import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import '../../Styles/res.css'
import { useSelector } from 'react-redux';
import AuthContext from '../../context/AuthContext.context';
const Bottomnav = () => {
  const { profileOptions, setProfileOptions, loggedIn, setOpenLogin } = useContext(AuthContext)

  const openNavBar = useSelector((state) => state.modals.openBottomNav);
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <section class="nav-bottom">
        <ul class="nav-bottom-ul">
          <NavLink to={'shop/cart'} style={{ cursor: 'pointer' }} ><li class="nav-bottom-li"><IoCartSharp color='white' size={40} /></li></NavLink>
          <li class="nav-bottom-li" style={{ cursor: 'pointer' }} onClick={() => setProfileOptions(!profileOptions)}><AiOutlineMenuUnfold color='white' size={40} /></li>
          {
            loggedIn ? <NavLink to={'/user/profile'} ><li class="nav-bottom-li"><FaUserCircle color='white' size={40} /></li></NavLink> :
              <li class="nav-bottom-li" onClick={() => setOpenLogin(true)}> <FaUserCircle color='white' size={40} /> </li>
          }

        </ul>
      </section>
    </>
  )
}

export default Bottomnav