import { DECREASE, INCREASE } from '../actions/actions'

function reducer(state, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 }
    case INCREASE:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

export default reducer
