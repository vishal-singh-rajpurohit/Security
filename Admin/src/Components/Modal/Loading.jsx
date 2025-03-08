import React, { useContext } from 'react'
import '../../Styles/loading.css'
import AdminContext from '../../context/AdminContext.context'

const Loading = () => {
    const {loading} = useContext(AdminContext)
  return (
    <div style={{display: loading? 'flex': 'none'}} className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  )
}

export default Loading