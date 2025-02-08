import React, { useContext, useEffect } from 'react'
import '../../Styles/nvModal.css'
import AuthContext from '../../context/AuthContext.context'

const NavModal = () => {

    const {setProfileOptions,profileOptions} = useContext(AuthContext);

    useEffect(()=>{
      setProfileOptions(false)
    },[])

  return (
    <section className="madal-bottom-header" style={{ display: profileOptions ? 'flex' : 'none' }}>
        <ul className="btm-ul">
            <a href="https://google.com" target='_blank'><li className="btn-li">About</li></a>
            <a href="https://google.com" target='_blank'><li className="btn-li">Contact</li></a>
            <li className="btn-li" onClick={()=>setProfileOptions(false)}>Close</li>
        </ul>
    </section>
  )
}

export default NavModal