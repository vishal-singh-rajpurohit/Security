import React from 'react'
import '../../Styles/order.css'

const OrderDetails = () => {
  return (
    <section className="Order">
      <div className="order-order">
        <div className="type-tag">
          <p className="type-para">Payment Status</p>
        </div>
        <div className="Order-section">
          <div className="order-single-">
            <p className="one-0n-one">Tatal Ammount : 12000</p>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Advanced Payment Ammount : 6000</p>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Advanced Payment Status : Pending</p>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Advanced Payment Id : Pending</p>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Last Payment Id : Pending</p>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Order Status : PENDING</p>
          </div>
        </div>
        <div className="type-tag">
          <p className="type-para">Product Details</p>
        </div>
        <div className="Order-section">
          <div className="order-single-">
            <p className="one-0n-one">Product Name : Vishal Singh</p>
          </div>
          <div className="order-three-">
            <div className="sm-3">
              <p className="one-0n-one">Premium</p>
              <input className="input-block"type="text" placeholder='True' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Tag</p>
              <input className="input-block"type="text" placeholder='Budget' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Indoor / Outdoor</p>
              <input className="input-block"type="text" placeholder='BOTH' readOnly={true} />
            </div>
          </div>
          <div className="order-three-">
            <div className="sm-3">
              <p className="one-0n-one">Camera Quality</p>
              <input className="input-block"type="text" placeholder='IP' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Camera Type</p>
              <input className="input-block"type="text" placeholder='DOME' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Hard Disk Size</p>
              <input className="input-block"type="text" placeholder='512 GB' readOnly={true} />
            </div>
          </div>
          <div className="order-three-">
            <div className="sm-3">
              <p className="one-0n-one">Number of cameras</p>
              <input className="input-block"type="text" placeholder='5' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Channel</p>
              <input className="input-block"type="text" placeholder='8' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Meag Pixels</p>
              <input className="input-block"type="text" placeholder='2mp' readOnly={true} />
            </div>
          </div>
          <div className="order-single-">
            <p className="one-0n-one">Description</p>
            <p className="one-0n-one">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit fuga nesciunt praesentium cumque dolorem accusamus neque quisquam ipsum, mollitia quam tempore illo necessitatibus dicta! Ratione enim nesciunt exercitationem dolorum.</p>
          </div>
          <div className="order-about">
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
            <li className="about-li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque placeat, assumenda tenetur eius voluptas.</li>
          </div>
        </div>
        <div className="type-tag">
          <p className="type-para">Address Details</p>
        </div>
        <div className="Order-section">
          <div className="order-single-">
            <div className="sm-3">
              <p className="one-0n-one">Premium</p>
              <input className="input-block"type="text" placeholder='lakjd lkjasdfk jsadlkjfksdjlfk jsakldfjlkasjfldsfkljfkla sdfa dfad fasf' readOnly={true} />
            </div>
          </div>
          <div className="order-two-">
            <div className="sm-3">
              <p className="one-0n-one">State</p>
              <input className="input-block"type="text" placeholder='Rajasthan' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">City</p>
              <input className="input-block"type="text" placeholder='Jodhpur' readOnly={true} />
            </div>
          </div>
          <div className="order-single-">
            <div className="sm-3">
              <p className="one-0n-one">Post Code</p>
              <input className="input-block"type="text" placeholder='444444' readOnly={true} />
            </div>
          </div>
        </div>
        <div className="type-tag">
          <p className="type-para">Customer Details</p>
        </div>
        <div className="Order-section">
          <div className="order-single-">
            <div className="sm-3">
              <p className="one-0n-one">Customer Name</p>
              <input className="input-block" type="text" placeholder='Pokemon' readOnly={true} />
            </div>
          </div>
          <div className="order-two-">
            <div className="sm-3">
              <p className="one-0n-one">Mobile Number</p>
              <input className="input-block"type="text" placeholder='9509075612' readOnly={true} />
            </div>
            <div className="sm-3">
              <p className="one-0n-one">Email</p>
              <input className="input-block"type="text" placeholder='vsgamer9595@gmail.com' readOnly={true} />
            </div>
          </div>
        </div>
        <div className="type-tag">
          <p className="type-para">Reffral Details</p>
        </div>
        <div className="Order-section">
          <div className="order-single-">
            <div className="sm-3">
              <p className="one-0n-one">Reffral Name</p>
              <input className="input-block"type="text" placeholder='Pokemon' readOnly={true} />
            </div>
          </div>
          <div className="order-two-">
            <div className="sm-3">
              <p className="one-0n-one">Mobile Number</p>
              <input className="input-block"type="text" placeholder='9521219531' readOnly={true} />
            </div>
          </div>
        </div>
        <div className="Order-section Bottom">
          <button className="order-aproval">Approve</button>
          <button className="order-aproval">Cancle</button>
        </div>
      </div>
    </section>
  )
}

export default OrderDetails