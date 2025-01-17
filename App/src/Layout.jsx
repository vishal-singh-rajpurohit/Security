import React from 'react'
import Header from './Components/Header/Header'
import Bottomnav from './Components/Header/Bottomnav'
import Footer from './Components/Footer/Footer'
import ReportModal from "./Components/Modal/ReportModal";
import SubmitModal from "./Components/Modal/SubmitModal";
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <Bottomnav />
        <ReportModal />
        <SubmitModal />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout