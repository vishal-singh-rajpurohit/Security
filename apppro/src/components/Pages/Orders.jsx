import "../../Styles/orders.css"


const StatusButton = ({ status }) => {
  return (
    status === "PENDING" ?
      <div class="order-status status-pending">Pending</div> :
      status === "SHIPPED" ?
        <div class="order-status status-shipped">Shipped</div> :
        status === "DELIVERED" ?
          <div class="order-status status-delivered">Delivered</div> :
          status === "CANCELLED" ?
            <div class="order-status status-cancelled">Cancelled</div> :
            null
  )
}

const OrderCard = ({ orderId, title, ammount, date, status }) => {
  return (
    <div class="order-card">
      <div class="order-header">
        <div class="order-id">Order #123456</div>
        <div class="order-date">May 12, 2025</div>
      </div>
      <div class="order-body">
        <div class="order-info">
          <p>Product: Wireless Headphones</p>
          <p>Price: $59.99</p>
          {<StatusButton status={"DELIVERED"} />}
        </div>
        <div class="order-actions">
          <button class="cancel-btn" disabled={status === "DELIVERED" || status === "CANCELLED"}>Cancel</button>
          <button class="show-btn">Show</button>
        </div>
      </div>
    </div>
  )
}


const Orders = () => {
  return (
    <div class="orders-container">
      <h2>My Orders</h2>

      <OrderCard status={"DELIVERED"} />

      <div class="order-card">
        <div class="order-header">
          <div class="order-id">Order #123455</div>
          <div class="order-date">May 5, 2025</div>
        </div>
        <div class="order-body">
          <div class="order-info">
            <p>Product: Bluetooth Speaker</p>
            <p>Price: $39.99</p>
            {<StatusButton status={"SHIPPED"} />}
          </div>
          <div class="order-actions">
            <button class="cancel-btn">Cancel</button>
            <button class="show-btn">Show</button>
          </div>
        </div>
      </div>

      <div class="order-card">
        <div class="order-header">
          <div class="order-id">Order #123454</div>
          <div class="order-date">April 22, 2025</div>
        </div>
        <div class="order-body">
          <div class="order-info">
            <p>Product: Smart Watch</p>
            <p>Price: $120.00</p>
            {StatusButton("DELIVERED")}
          </div>
          <div class="order-actions">
            <button class="cancel-btn" disabled>Cancel</button>
            <button class="show-btn">Show</button>
          </div>
        </div>
      </div>


      <div class="order-card">
        <div class="order-header">
          <div class="order-id">Order #123453</div>
          <div class="order-date">April 15, 2025</div>
        </div>
        <div class="order-body">
          <div class="order-info">
            <p>Product: Laptop Bag</p>
            <p>Price: $25.50</p>
            {StatusButton("CANCELLED")}
          </div>
          <div class="order-actions">
            <button class="cancel-btn" disabled>Cancel</button>
            <button class="show-btn">Show</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Orders;
