import { configureStore, combineReducers} from '@reduxjs/toolkit';
// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import categoryReducer from './categories.slice'
// import productReducer from './products';
// import cartReducer from './cart';
import categoriesSlice from './categories.slice';

let reducer = combineReducers({
  // categories: categoryReducer,
  // products: productReducer,
  // cart: cartReducer
  categories: categoriesSlice.reducer
});

export default function store(){
  return configureStore({reducer});
}