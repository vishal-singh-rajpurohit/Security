import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import '../../Styles/res.css'
import { useSelector } from 'react-redux';
import AuthContext from '../../context/AuthContext.context';
const Bottomnav = () => {
  const {profileOptions, setProfileOptions} = useContext(AuthContext)

  const openNavBar = useSelector((state) => state.modals.openBottomNav);
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const {loggedIn} = useContext(AuthContext)

  return (
    <>
      <section class="nav-bottom">
            <ul class="nav-bottom-ul">
                <li class="nav-bottom-li"><IoCartSharp size={50} /></li>
                <li class="nav-bottom-li" onClick={()=>setProfileOptions(!profileOptions)}><AiOutlineMenuUnfold size={70} /></li>
                <NavLink to={'/user/profile'} ><li class="nav-bottom-li"><FaUserCircle  size={50} /></li></NavLink>
            </ul>
        </section>
    </>
  )
}

export default Bottomnav