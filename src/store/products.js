import data from '../data'

const initialState = data.products;

export default function productsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return payload.results;
    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === payload.name) {
          product.inventory = product.inventory - 1;
        }
        return product;
      });
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        if (product.name === payload.name) {
          product.inventory = product.inventory + 1;
        }
        return product;
      });
    default:
      return state;
  }
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}
