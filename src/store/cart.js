const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return [...state, payload]
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.name !== payload.name)
    default:
      return state
  }
}
