import React from 'react'
import DeliveryIcon from './DeliveryIcon'
import { Link } from 'react-router-dom'

function OrderNow() {
  return (
    <Link to="/order-now" className="button" data-type="primary">
        Order Now <DeliveryIcon />
    </Link>
  )
}

export default OrderNow