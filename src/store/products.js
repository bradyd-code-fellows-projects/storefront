const initialState = {
  cart: [],
  cartCount: 0
}

export default function productReducer(state = initialState, action) {
  let { type } = action;
  switch (type) {
    case 'ADD_TO_CART':
      console.log('payload: ', action.payload);
      return [...state.cart, {cart: state.cart.push(action.payload), cartCount: state.cartCount + 1 }]
    default:
  return state
  }
}

export const handleAddToCart = (product) => {
  // state.cart.push(product);
  console.log(`${product.productName} added to cart`);
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}
