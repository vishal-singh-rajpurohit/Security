import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import {EditAdvanedPrice, EditName, EditPrice} from './Components/Modal/EditName'
import Loading from './Components/Modal/Loading'

const Layout = () => {
  return (
    <>
      <EditName />
      <EditPrice />
      <EditAdvanedPrice />
      <Loading />
      <Header />
      <Outlet />
    </>
  )
}

export default Layout