import React, { useContext } from 'react'
import '../../Styles/loading.css'
import AdminContext from '../../context/AdminContext.context'

const Loading = () => {
    const {loading} = useContext(AdminContext)
  return (
    <div className='loading' style={{display: loading? 'flex' : 'none'}}>Loading....</div>
  )
}

export default Loading