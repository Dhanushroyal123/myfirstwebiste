import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from '../actions/actions'

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      /*
      let tempC = []
      if (action.payLoad.amount === 1) {
        console.log('hii')
      } else {
        tempC = state.cart.map((cartItem) => {
          if (cartItem.id === action.payLoad.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
      }
      return { ...state, cart: tempC }
      */
      if (action.payLoad.amount === 1) {
        return {
          ...state,
          cart: state.cart.filter((each) => each.id !== action.payLoad.id),
        }
      } else {
        let tempC = state.cart.map((cartItem) => {
          if (cartItem.id === action.payLoad.id) {
            return { ...state, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
        return { ...state, cart: tempC }
      }

    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payLoad.id) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((each) => each.id !== action.payLoad.id),
      }
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = amount * price
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )

      return { ...state, total: total, amount: amount }
    default:
      return state
  }
}

export default reducer
