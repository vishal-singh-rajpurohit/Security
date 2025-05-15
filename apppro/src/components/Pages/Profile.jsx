import { replace, useNavigate } from "react-router-dom"
import "../../Styles/profile.css"
import { ImageSlider } from "../Individual/Slides"
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();

  const [editmode, setEditMode] = useState(false);

  function logout() {
    navigate("/", { replace: true })
  }

  function save(){}

  return (
    <>
      <ImageSlider />
      <div className="profile-container">
        <div className="profile-header">
          <h2>John Doe</h2>
          <p>Customer since 2022</p>
        </div>
        <div className="section">
          <h3>Account Information</h3>
          <div className="info-grid">
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1 234 567 8901</p>
            <p>Address: 123 Main St, New York, NY</p>
            <p>ZIP: 10001</p>
          </div>
        </div>
        <div className="section">
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
        </div>

        <div className="profile-actions">
          {
            editmode ? <>
              <button className="edit-btn" onClick={() =>setEditMode(false)}>cancel</button>
              <button className="edit-btn">save edit</button>
            </> :
              <button className="edit-btn" onClick={() =>setEditMode(true)}>Edit Profile</button>
          }
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </>
  )
}

export default Profile
