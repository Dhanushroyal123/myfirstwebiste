import { cart } from '../../cart-items/cart'

const Product = () => {
  return (
    <>
      {cart.map((each) => {
        const { id, image, p_name, price } = each
        return (
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
              <img
                style={{ width: '80px', height: '80px' }}
                src={image}
                alt=''
              />
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
              <a href='#'>Remove</a>
            </div>
            <div style={{ flex: '2' }}>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => console.log('clikced')}
              >
                +
              </span>
              <br />
              <span>0</span>
              <br />
              <span>-</span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Product
