import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import React from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/home'
import Show from './components/lifecycle'
import { cart } from './cart-items/cart'
import CartContainer from './components/Cart-container/cartcontainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { DECREASE, INCREASE } from './actions/actions'
import reducer from './reducer/reducer'

//store

const initialStore = {
  cart: cart,
  total: 0,
  amount: 1,
}

const store = createStore(reducer, initialStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
