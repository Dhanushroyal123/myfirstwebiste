import cart from '../../assets/shopping-cart.png'
import logo from '../../assets/fplogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

const Header = ({ total }) => {
  return (
    <div className='header container-fluid'>
      <img
        src={logo}
        style={{
          width: '200px',
          height: '140px',
          position: 'relative',
          top: '-20px',
        }}
        alt=''
      />
      <div
        id='cart'
        style={{
          display: 'inline-block',
          float: 'right',
          margin: '20px',
          position: 'relative',
          top: '10px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            background: 'red',
            padding: '1px',
            display: 'inline-block',
            width: '26px',
            height: '26px',
            borderRadius: '50px',
            textAlign: 'center',
            color: 'white',
            left: '25px',
            top: '-15px',
          }}
        >
          {total}
        </div>
        <img
          style={{
            width: '35px',
            height: '35px',
          }}
          src={cart}
          alt=''
        />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { total: state.amount }
}

export default connect(mapStateToProps)(Header)
