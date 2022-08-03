const initialState = {
  cart: [],
  cartCount: 0
}

export default function productReducer(state = initialState, action) {
  let { type } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state, cart: state.cart.push('item'), cartCount: state.cartCount + 1
      }
    default:
      return state
  }
}

export const handleAddToCart = (item) => {
  console.log(`${item} added to cart`);
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}
