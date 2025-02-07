import React, { useContext } from 'react'
import'../../Styles/loader.css'
import AuthContext from '../../context/AuthContext.context'

const Loader = () => {
    const {loading, setLoading} = useContext(AuthContext)
  return (
    <div class="loader-container" style={{display: loading ? 'flex' : 'none'}}>
        <div class="loader"></div>
    </div>
  )
}

export default Loader