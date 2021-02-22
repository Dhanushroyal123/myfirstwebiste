import { connect } from 'react-redux'
import { INCREASE, DECREASE, REMOVE } from '../../actions/actions'

const Product = ({
  image,
  p_name,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div style={{ padding: '2px' }}>
      <div className='item'>
        <div className='item-img'>
          <img style={{ width: '80px', height: '80px' }} src={image} alt='' />
        </div>
        <div className='item-details'>
          <span>{p_name}</span>
          <br />
          <span>{price} Rs/-</span>
          <br />
          <a href='#' onClick={() => remove()}>
            Remove
          </a>
        </div>
        <div className='item-coun'>
          <a className='counter' href='#' onClick={() => increase()}>
            &#9651;
          </a>
          <br />
          <span>{amount}</span>
          <br />
          <a className='counter' href='#' onClick={() => decrease()}>
            &#9661;
          </a>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps
  return {
    remove: () => dispatch({ type: REMOVE, payLoad: { id } }),
    increase: () => dispatch({ type: INCREASE, payLoad: { id } }),
    decrease: () => dispatch({ type: DECREASE, payLoad: { id, amount } }),
  }
}

export default connect(null, mapDispatchToProps)(Product)
