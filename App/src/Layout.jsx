import React from 'react'
import Header from './Components/Header/Header'
import Bottomnav from './Components/Header/Bottomnav'
import Footer from './Components/Footer/Footer'
import ReportModal from "./Components/Modal/ReportModal";
import SubmitModal from "./Components/Modal/SubmitModal";
import { Outlet } from 'react-router-dom'
import SignupModal from './Components/Modal/SignupModal';
import LoginModal from './Components/Modal/LoginModal';
import ConformOrder from './Components/Profile/Orders/ConformOrder';
import SecurityOtp from './Components/Modal/SecurityOtp';
import Loader from './Components/Modal/Loader';
import NavModal from './Components/Modal/NavModal';
import Failed from './Components/Modal/Failed';

const Layout = () => {
  return (
    <>
      {/* modals */}
      <Failed />
      <Loader />
      <SignupModal />
      <LoginModal />
      <NavModal />
      <ConformOrder />
      <SecurityOtp />
      <Header />
      <ReportModal />
      <SubmitModal />
      <Outlet />
      <Bottomnav />
      <Footer />
    </>
  )
}

export default Layout