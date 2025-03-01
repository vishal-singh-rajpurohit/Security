import React from 'react'
import '../../Styles/header.css'
import {NavLink} from 'react-router-dom'
import { RiHome3Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { GrUserNew } from "react-icons/gr";
import { TbShoppingCartStar } from "react-icons/tb";
import { TbShoppingCartPin } from "react-icons/tb";

const Header = () => {
  return (
    <>
    <header className='add-header'>
      <ul className="header-ul">
        <NavLink to={'/'} ><li className="header-li"><RiHome3Fill size={25} /> <span className="li-span">Dashboard</span></li></NavLink>
        <NavLink to={'/new-item'} ><li className="header-li h-li-bottom"><HiViewGridAdd size={25} /> <span className="li-span">Add New</span> </li></NavLink>
        <NavLink to={'/'} ><li className="header-li h-li-bottom"><GrUserNew size={25} /> <span className="li-span">New Users</span></li></NavLink>
        <NavLink to={'/new-orders'} ><li className="header-li h-li-bottom"><TbShoppingCartStar size={25} /> <span className="li-span">New Orders</span> </li></NavLink>
        <NavLink to={'/'} ><li className="header-li"><TbShoppingCartPin size={25} /> <span className="li-span">Shipping Orders</span></li></NavLink>
      </ul>
    </header>
    <header className='add-header-bottom'>
      <ul className="header-ul-bottom">
        <NavLink to={'/new-item'} ><li className="header-li-bottom"><HiViewGridAdd size={30} /></li></NavLink>
        <NavLink to={'/'} ><li className="header-li-bottom"><GrUserNew size={30} /></li></NavLink>
        <NavLink to={'/new-orders'} ><li className="header-li-bottom"><TbShoppingCartStar size={30} /></li></NavLink>
      </ul>
    </header>
    </>
    
  )
}

export default Header