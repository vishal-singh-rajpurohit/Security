import React from 'react'
import "./Report.css"
import { MdOutlineReport } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeReportBox } from '../../Functions/Ui/modalSlice'

const ReportModal = () => {
  
  const dispatch = useDispatch()
  const openReport = useSelector((state)=> state.modals.openReport)

  const closeReport = () => dispatch(closeReportBox());

  return (
    <section className="report-dialouge-box" style={{display: openReport? 'flex' : 'none'}} >
      <div className="dialouge-box">
        <div className="report-top ">
          <div className="report-icon">
            <MdOutlineReport color='black' size={70} />
          </div>
          <div className="report-text">Report Here</div>
        </div>
        <div className="report-mid">
          <div className="form">
            <div className="options">
              <label htmlFor="select" className="op-label">What Kind Of Troubel You Are Facing</label>
              <select name="select" value={"selectedValue"} id="" className="report-op">
                <option className='op-select' value="option1">option 1</option>
                <option className='op-select' value="option2">option 2</option>
                <option className='op-select' value="option3">option 2</option>
              </select>
            </div>
            <div className="message-for-report">
              <label htmlFor="message" className="op-label">Describe Your Problem in 200 Words</label>
              <textarea name="message" id="" placeholder='i am getting problem in .... !' className="message-text"></textarea>
            </div>
          </div>
        </div>
        <div className="report-bottom">
          <div className="buttons-for-report">
            <button className="report-btn">Report</button>
            <button className="report-btn plane" onClick={closeReport}>Close</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportModal;