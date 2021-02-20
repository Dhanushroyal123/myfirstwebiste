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
          margin: '20px',
        }}
      >
        YOUR BAG
      </h1>
      <div
        style={{
          boxShadow: '0px 5px 8px 2px rgb(0,0,0,0.2)',
          padding: '10px',
          marginTop: '40px',
        }}
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
