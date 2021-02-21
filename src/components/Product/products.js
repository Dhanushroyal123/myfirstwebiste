import { connect } from 'react-redux'
import { INCREASE, DECREASE, REMOVE } from '../../actions/actions'

const Product = ({
  key,
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '20px',
          alignContent: 'space-around',
        }}
        className='item'
      >
        <div style={{ display: 'inline-block', flex: '1' }}>
          <img style={{ width: '80px', height: '80px' }} src={image} alt='' />
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'left',
            flex: '1',
          }}
        >
          <span>{p_name}</span>
          <br />
          <span>{price}</span>
          <br />
          <a href='#' onClick={() => remove()}>
            Remove
          </a>
        </div>
        <div style={{ flex: '2' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => increase()}>
            +
          </span>
          <br />
          <span>{amount}</span>
          <br />
          <span style={{ cursor: 'pointer' }} onClick={() => decrease()}>
            -
          </span>
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
