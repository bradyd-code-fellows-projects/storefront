import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import votesReducer from './votes';
import categoryReducer from './products'

let reducers = combineReducers({
  votes: votesReducer,
  categories: categoryReducer
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}