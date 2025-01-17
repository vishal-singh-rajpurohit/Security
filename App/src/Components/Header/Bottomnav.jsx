import React, { useContext } from 'react'
import './Bottom.css'
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import AuthContext from '../../context/AuthContext.context';
const Bottomnav = () => {

  const openNavBar = useSelector((state) => state.modals.openBottomNav);
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const {loggedIn} = useContext(AuthContext)

  return (
    <>
      <nav className='bottom-navigation' style={{ display: openNavBar ? 'flex' : 'none' }}>
        <div className="bottom-nav-container">
          <ul className="btm-nav-ul">
            <li className="btm-nav-li"><NavLink to={'/about'}><button className="btm-nav-btn">About</button></NavLink></li>
            <li className="btm-nav-li"><NavLink to={'/contacts'}><button className="btm-nav-btn">Contact</button></NavLink></li>
            {
              loggedIn ? <>
                <li className="btm-nav-li"><NavLink to={'/user/profile'}><button className="btm-nav-btn"><FaUser size={20} /></button></NavLink></li>
                <li className="btm-nav-li"><NavLink to={'/contacts'}><button className="btm-nav-btn"><FaCartShopping size={20} /></button></NavLink></li>
              </>
                :
                <li className="btm-nav-li"><NavLink to={'/user/register'}><button className="btm-nav-btn">Signup</button></NavLink></li>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Bottomnav