import React, { useContext, useEffect, useState } from 'react'
import AuthContext from "../../context/AuthContext.context"
import Login from '../LoginSignup/Login'
import Products from '../Products/Products'

const SecuredRoute = ({Children}) => {
  const {loggedIn, setOpenLogin} = useContext(AuthContext)

  useEffect(()=>{
    if(!loggedIn){
      setOpenLogin(true)
    }
  },[])

  return (
    loggedIn ? <Children /> : <Products />
  )
}

export default SecuredRoute
