const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.name !== action.payload.name)
    default:
      return state
  }
}

export const handleDeleteFromCart = (product) => {
  console.log(`${product.productName} removed from cart`);
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}