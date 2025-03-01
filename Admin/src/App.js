import './App.css';
import { Routes, Route } from 'react-router-dom'
import Add from './Components/Add/Add';
import Item from './Components/Item/Item';
import Layout from './Layout';
import Products from './Components/Products/Products';
import NewOrders from './Components/Orders/NewOrders';
import OrderDetails from './Components/Orders/OrderDetails';

function App() {


  return <>
    <Routes >
      {/* <Route path='/' element={< />} /> */}
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Products />} />
        <Route path='/new-item' element={<Add />} />
        <Route path='/order-details' element={<OrderDetails />} />
        <Route path='/new-orders' element={<NewOrders />} />
        <Route path='/item' element={<Item />} />
      </Route>
    </Routes>
    {/* <Add /> */}
  </>
}

export default App;
