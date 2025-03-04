import React, { useContext } from 'react'
import AdminContext from '../../context/AdminContext.context'
import '../../Styles/edit.css'

const EditName = () => {
  const { selected, modeName, setModeName, newName, setNewName, changeName } = useContext(AdminContext)
  return (
    <section className="Edit-modal" style={{ display: modeName ? 'flex' : 'none' }}>
      <div className="edit-box">
        <input type="text" className="edit-input" onChange={(e) => setNewName(e.target.value)} placeholder='Enter new title....' />
        <button className="edit-submit" onClick={() => changeName(selected._id, newName)} >Submit</button>
        <button className="edit-submit" onClick={() => setModeName(false)}>Cancle</button>
      </div>
    </section>
  )
}

const EditPrice = () => {
  const { selected, modePrice, setModePrice, newPrice, setNewPrice, changePrice } = useContext(AdminContext);

  return (
    <section className="Edit-modal" style={{ display: modePrice ? 'flex' : 'none' }}>
      <div className="edit-box">
        <input type="number" className="edit-input" onChange={(e) => setNewPrice(e.target.value)} placeholder='Enter new Price....' />
        <button className="edit-submit" onClick={() => changePrice(selected._id, newPrice)}>Submit</button>
        <button className="edit-submit" onClick={() => setModePrice(false)} >Cancle</button>
      </div>
    </section>
  )
}

const EditAdvanedPrice = () => {
  const { selected, newPrice, setNewPrice, changeAdvancedPrice, modeAdvancedPrice, setModeAdvancedPrice} = useContext(AdminContext);

  return (
    <section className="Edit-modal" style={{ display: modeAdvancedPrice ? 'flex' : 'none' }}>
      <div className="edit-box">
        <input type="number" className="edit-input" onChange={(e) => setNewPrice(e.target.value)} placeholder='Enter new Advanced Ammount....' />
        <button className="edit-submit" onClick={() => changeAdvancedPrice(selected._id, newPrice)}>Submit</button>
        <button className="edit-submit" onClick={() => setModeAdvancedPrice(false)} >Cancle</button>
      </div>
    </section>
  )
}


export { EditName, EditPrice, EditAdvanedPrice }