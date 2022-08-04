const initialState = {
  cart: [],
  cartCount: 0
}

export default function productReducer(state = initialState, action, product) {
  let { type } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state, cart: state.cart, cartCount: state.cartCount + 1
      }
    default:
      return state
  }
}

export const handleAddToCart = (product, state = initialState) => {
  state.cart.push(product);
  console.log(`${product.productName} added to cart`);
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}
