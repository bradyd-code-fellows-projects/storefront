// const initialState = {
//   cart: [],
//   cartCount: 0
// }
export default function cartReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, payload],
        cartCount: state.cartCount + 1
      }
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.name !== payload.name)
    default:
      return state
  }
}
