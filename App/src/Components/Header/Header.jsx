import React, { useContext } from 'react'
import './Header.css'
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { setBottomNav } from '../../Functions/Ui/modalSlice';
import AuthContext from '../../context/AuthContext.context';

const Header = () => {

  const dispatch = useDispatch();
  const {loggedIn} = useContext(AuthContext)
  const setOpenNavBar = () => dispatch(setBottomNav());

 
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink className={"logo-text"} to={"/"}>AJ</NavLink>
          <ul className="nav-links">
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contacts'}>Contacts</NavLink></li>
            {
              loggedIn ? <>
                <li id='profile'><NavLink to={'/user/profile'}><FaUser size={20} /></NavLink></li>
                <li id='profile'><NavLink to={'/shop/cart'}><FaCartShopping size={20} /></NavLink></li>
              </>
                :
                <li><NavLink to={'/user/register'} >Signup</NavLink></li>
            }

          </ul>
          <div className="menu-icon" id="menuIcon" onClick={() => setOpenNavBar()}>
            &#9776;
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header