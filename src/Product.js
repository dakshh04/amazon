import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className="product">
        <div className="product_info">
            <p>The lean startup</p>
            <p className="product_price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <p className="product_rating">
                <p>⭐⭐⭐⭐⭐</p>
            </p>
        </div>
        <img src="" alt="" />
    </div>
  )
}

export default Product