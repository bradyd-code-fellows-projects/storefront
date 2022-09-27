import axios from 'axios';

const initialState = [
  {
    productName: 'TV',
    category: 'Electronics',
    price: '$599.99',
    description: '"The Office" player'
  },
  {
    productName: 'Macbook',
    category: 'Electronics',
    price: '1299.99',
    description: 'Code machine'
  },
  {
    productName: 'Screwdriver',
    category: 'Tools',
    price: '$129.99',
    description: 'battery-powered tool to drive screws'
  },
  {
    productName: 'wrench',
    category: 'Tools',
    price: '$5.99',
    description: 'manual tool for tightening/loosening bolts/nuts'
  }
];

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

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data))
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}
