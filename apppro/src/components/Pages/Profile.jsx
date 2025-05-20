import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import "../../Styles/profile.css"
import { ImageSlider } from "../Individual/Slides"
import { useEffect, useState } from "react";
import { logOutUser } from "../../App/functions/auth.slice"
import { loaded, loading } from "../../App/functions/variable.slice"

const Profile = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user)

  const [editmode, setEditMode] = useState(false);

  async function logout() {
    dispatch(loading());
    try {
      await axios.post(`${process.env.REACT_APP_API}/user/logout`, {}, {
        withCredentials: true
      })

      dispatch(logOutUser());
      navigate("/", { replace: true })

    } catch (error) {
      console.log("error in logout: ", error);
    } finally {
      dispatch(loaded())
    }
  }

  function transition() {
    dispatch(loading());

    setTimeout(() => {
      dispatch(loaded());
    }, 1500);
  }


  function save() { }

  useEffect(()=>{
    transition();

    

  }, [])
  return (
    <>
      <ImageSlider />
      <div className="profile-container">
        <div className="profile-header">
          <h2>{user.name}</h2>
          {/* <p>Customer since 2022</p> */}
        </div>
        <div className="section">
          <h3>Account Information</h3>
          <div className="info-grid">
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address + " " + user.city + " " + user.state}</p>
            <p>ZIP: {user.postCode}</p>
          </div>
        </div>
        {/* <div className="section">
          <h3>Order Summary</h3>
          <div className="order-summary">
            <div className="summary-box">
              <h4>Total Orders</h4>
              <p>15</p>
            </div>
            <div className="summary-box">
              <h4>Wishlist Items</h4>
              <p>8</p>
            </div>
            <div className="summary-box">
              <h4>Last Order</h4>
              <p>Apr 28, 2025</p>
            </div>
          </div>
        </div> */}

        <div className="profile-actions">
          {/* {
            editmode ? <>
              <button className="edit-btn" onClick={() =>setEditMode(false)}>cancel</button>
              <button className="edit-btn">save edit</button>
            </> :
              <button className="edit-btn" onClick={() =>setEditMode(true)}>Edit Profile</button>
          } */}
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Profile
