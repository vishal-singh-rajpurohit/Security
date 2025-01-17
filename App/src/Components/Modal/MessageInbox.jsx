import React from 'react'
import { CgClose } from 'react-icons/cg'
import "./Message.css"
import "./Report.css"
import { useDispatch, useSelector } from 'react-redux'
import {openMessages} from '../../Functions/Ui/modalSlice'

const MessageInbox = () => {

    const dispatch = useDispatch()

        const openMessage = useSelector((state)=> state.modals.openMessageBox);

        const toggleMessage = () => dispatch(openMessages());

    return (
        <section className="report-dialouge-box" style={{display: openMessage? 'flex': 'none'}}>
            <section className="message-modal">
                <div className="top-modal">
                    <div className="filter-messages">
                        <select name="filter-select" id="" className="filter-select">
                            <option value="Reports" className="filter-options">Reports</option>
                            <option value="Orders" className="filter-options">Orders</option>
                        </select>
                        <button className="close-button" onClick={toggleMessage} ><CgClose  size={30} /></button>
                    </div>
                    <div className="message-box">
                        <ul className="message-ul">
                            {/* make it perfectly scrolling */}
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="message-li">
                                <div className="message-signle-box">
                                    <p className="message-text-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, at. Dolor, modi sint molestiae culpa atque vero commodi, facilis placeat tenetur ipsa optio voluptates voluptatibus recusandae reiciendis quia provident eveniet.</p>
                                    <div className="message-date-time">
                                        <span className="status">GOOD</span>
                                        <span className="date">
                                            <span className="date-box">12-5 </span>
                                            /
                                            <span className="time"> 9:00</span>
                                            <span className="time-unit"> AM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MessageInbox