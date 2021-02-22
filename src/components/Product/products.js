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
          <span>{price} Rs/-</span>
          <br />
          <a
            href='#'
            style={{ textDecoration: 'none' }}
            onClick={() => remove()}
          >
            Remove
          </a>
        </div>
        <div style={{ flex: '2' }}>
          <a
            href='#'
            style={{
              cursor: 'pointer',
              padding: '2px',
              color: '#067fff',
              fontWeight: 'bold',
              fontSize: '16px',
              textDecoration: 'none',
            }}
            onClick={() => increase()}
          >
            &#9651;
          </a>
          <br />
          <span>{amount}</span>
          <br />
          <a
            href='#'
            style={{
              cursor: 'pointer',
              padding: '2px',
              color: '#067fff',
              fontWeight: 'bold',
              fontSize: '16px',
              textDecoration: 'none',
            }}
            onClick={() => decrease()}
          >
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
