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
      let tempC = []
      if (action.payLoad.amount === 1) {
        tempC = state.cart.filter(
          (cartItem) => cartItem.id !== action.payLoad.id
        )
      } else {
        tempC = state.cart.map((cartItem) => {
          if (cartItem.id === action.payLoad.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
      }
      return { ...state, cart: tempC }
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payLoad.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
    case REMOVE:
      console.log('removed', action.payLoad.id)
      return {
        ...state,
        cart: state.cart.filter((each) => each.id !== action.payLoad.id),
      }
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      console.log('arjun', total, amount)
      return { ...state, total, amount }
    default:
      return state
  }
}

export default reducer
