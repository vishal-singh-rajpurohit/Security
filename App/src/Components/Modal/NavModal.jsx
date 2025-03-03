import React, { useContext, useEffect } from 'react'
import '../../Styles/nvModal.css'
import AuthContext from '../../context/AuthContext.context'
import { NavLink } from 'react-router-dom';

const NavModal = () => {

  const { setProfileOptions, profileOptions } = useContext(AuthContext);

  useEffect(() => {
    setProfileOptions(false)
  }, [])

  return (
    <section className="madal-bottom-header" style={{ display: profileOptions ? 'flex' : 'none' }}>
      <ul className="btm-ul">
        <NavLink to={'/about'} ><li className="btn-li">About</li></NavLink>
        <NavLink to={'/terms'} ><li className="btn-li">Privatcy Policy</li></NavLink>
        <a href="https://www.instagram.com/sewad.infotech" target='_blank'><li className="btn-li">Contact</li></a>
        <li className="btn-li" onClick={() => setProfileOptions(false)}>Close</li>
      </ul>
    </section>
  )
}

export default NavModal