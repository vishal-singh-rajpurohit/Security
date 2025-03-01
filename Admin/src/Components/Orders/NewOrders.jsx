import React from 'react'
import t from '../../Assets/xtra.png'
import '../../Styles/neworders.css'

const NewOrders = () => {
  return (
    <section className="new-orders">
        <div className="upper-section">
            <div className="uppder-section-card">
                <ul className="order-count-ul">
                    <li className="order-count-li">
                        Total Orders : 5
                    </li>
                    <li className="order-count-li">
                        New Orders / Approved Orders : 5
                    </li>
                    <li className="order-count-li">
                        Approved Orders : 5
                    </li>
                    <li className="order-count-li">
                        Delivered Orders : 5
                    </li>
                    <li className="order-count-li">
                        Cancelled / Rejected : 5
                    </li>
                </ul>
            </div>
        </div>
        <div className="orders-grid">
            <div className="order-card">
                <div className="left-image">
                    <img src={t} alt="" className="left-image-order" />
                </div>
                <div className="right-details">
                    <div className="uppder-details">
                        <p className="details-name">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, odit facere. Sequi laudantium est reiciendis voluptatem aliquid impedit eaque maxime.</p>
                        <p className="total-ammount">total ammount : 12000</p>
                        <p className="total-ammount">advanced ammount : pending</p>
                    </div>
                    <div className="bottom-button">
                        <button className="btn-cancle-on">View Details</button>
                        <button className="btn-cancle-on">Cancle</button>
                    </div>
                </div>
            </div>
            <div className="order-card">
                <div className="left-image">
                    <img src={t} alt="" className="left-image-order" />
                </div>
                <div className="right-details">
                    <div className="uppder-details">
                        <p className="details-name">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, odit facere. Sequi laudantium est reiciendis voluptatem aliquid impedit eaque maxime.</p>
                        <p className="total-ammount">total ammount : 12000</p>
                        <p className="total-ammount">advanced ammount : pending</p>
                    </div>
                    <div className="bottom-button">
                        <button className="btn-cancle-on">View Details</button>
                        <button className="btn-cancle-on">Cancle</button>
                    </div>
                </div>
            </div>
            <div className="order-card">
                <div className="left-image">
                    <img src={t} alt="" className="left-image-order" />
                </div>
                <div className="right-details">
                    <div className="uppder-details">
                        <p className="details-name">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, odit facere. Sequi laudantium est reiciendis voluptatem aliquid impedit eaque maxime.</p>
                        <p className="total-ammount">total ammount : 12000</p>
                        <p className="total-ammount">advanced ammount : pending</p>
                    </div>
                    <div className="bottom-button">
                        <button className="btn-cancle-on">View Details</button>
                        <button className="btn-cancle-on">Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewOrders