import 'bootstrap/dist/css/bootstrap.min.css'
import Product from '../Product/products'
import React from 'react'
import { connect } from 'react-redux'
import { CLEAR_CART, GET_TOTALS } from '../../actions/actions'

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS })
  })
  if (cart.length === 0) {
    return (
      <div className='container text-center'>
        <header>
          <h3 className='bag-head'>YOUR BAG</h3>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </div>
    )
  }
  return (
    <>
      <h3 className='bag-head'>YOUR BAG</h3>
      <div className='container text-center'>
        <div
          style={cart.length < 3 ? {} : { height: '360px', overflow: 'auto' }}
          className='cart-box'
        >
          {cart.map((item, index) => {
            return (
              <>
                <Product key={item.id} {...item} />
                {index < cart.length - 1 && <hr />}
              </>
            )
          })}
        </div>
      </div>
      <footer className='container '>
        <hr />
        <div id='cart-total'>
          <h4 style={{ color: '#007bff' }}>
            Total:
            <span style={{ float: 'right', fontSize: '16px', color: 'black' }}>
              {total} Rs/-
            </span>
          </h4>
        </div>
        <hr />
        <div style={{ textAlign: 'center' }}>
          <button
            id='clear-btn'
            className='btn clear-btn'
            onClick={() => dispatch({ type: CLEAR_CART })}
          >
            CLEAR CART
          </button>
        </div>
      </footer>
    </>
  )
}

const mapStateToProps = (state) => {
  const { cart, total } = state
  return { cart, total }
}

export default connect(mapStateToProps)(CartContainer)
