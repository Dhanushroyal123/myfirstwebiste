import 'bootstrap/dist/css/bootstrap.min.css'
import Product from '../Product/products'

const CartContainer = () => {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          letterSpacing: '2px',
          fontWeight: 'bold',
        }}
      >
        YOUR BAG
      </h1>
      <div
        style={{ border: '1px solid black' }}
        className='container text-center'
      >
        <div className='cart-box'>
          <Product />
        </div>
      </div>
    </>
  )
}

export default CartContainer
