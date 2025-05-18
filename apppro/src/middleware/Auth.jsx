import React, { useEffect } from 'react'
import Login from '../components/Auth/Login';
import { useSelector } from 'react-redux';

export const Auth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  return (
    <>
      {isLoggedIn ? children : <Login />}
    </>
  );
};

export const ReverseAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {console.log("Executed Reverse Auth")}, [])

  return (
    <>
      {
        isLoggedIn ?  <> App</> : children
      }
    </>
  )
}


