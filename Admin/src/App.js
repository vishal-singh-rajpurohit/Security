import './App.css';
import { Routes, Route } from 'react-router-dom'
import Add from './Components/Add/Add';
import Item from './Components/Item';
import Products from './Components/Products';

function App() {


  return <>
    <Routes >
      {/* <Route path='/' element={<Products />} /> */}
      <Route path='/' element={<Add />} />
      <Route path='/Item' element={<Item />} />
    </Routes>
    {/* <Add /> */}
  </>
}

export default App;
