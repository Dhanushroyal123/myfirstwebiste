import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from '../actions/actions'

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      return { ...state, count: state.count - 1 }
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payLoad.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 }
        }
      })
      return { ...state, cart: tempCart }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((each) => each.id !== action.payLoad.id),
      }
    default:
      return state
  }
}

export default reducer
