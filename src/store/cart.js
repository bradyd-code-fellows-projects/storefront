const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case 'REMOVE_FROM_CART':
      return [...state, ]
    default:
      return state
  }
}