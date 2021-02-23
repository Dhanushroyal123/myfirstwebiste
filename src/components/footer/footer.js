import { connect } from 'react-redux'
import React from 'react'
import { CLEAR_CART, GET_TOTALS } from '../../actions/actions'

const Footer = ({ cart, total, dispatch }) => {
  return (
    <footer className='container '>
      {cart.length !== 0 && (
        <>
          <hr />
          <div id='cart-total'>
            <h4 style={{ color: '#007bff' }}>
              Total:
              <span
                style={{ float: 'right', fontSize: '16px', color: 'black' }}
              >
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
        </>
      )}
    </footer>
  )
}

const mapStateToProps = (state) => {
  const { cart, total } = state
  return { cart, total }
}

export default connect(mapStateToProps)(Footer)
