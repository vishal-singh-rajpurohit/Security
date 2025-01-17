import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import "./Report.css"
import { useDispatch, useSelector } from 'react-redux';
import {closeSuccess} from '../../Functions/Ui/modalSlice'

const SubmitModal = () => {

    const openReportSuccess = useSelector((state)=> state.modals.openReportSuccess);

    const dispatch = useDispatch();
    
    const handelClose = () =>{
        dispatch(closeSuccess());
    }

    return (
        <section className="report-dialouge-box" style={{ display: openReportSuccess ? 'flex' : 'none' }}>
            <div className="dialouge-box">
                <div className="report-top">
                    <div className="report-icon">
                        <FaRegThumbsUp color='#ffff3a' size={70} />
                    </div>
                    <div className="report-text">Your Report Submitted Successfully</div>
                </div>
                <div className="report-bottom">
                    <div className="buttons-for-report">
                        <button className="report-btn"
                        onClick={handelClose}
                        >Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubmitModal