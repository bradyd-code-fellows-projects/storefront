import '@testing-library/jest-dom';
import { categoryReducer, selectCategory } from '../store/categories';
import { legacy_createStore as createStore, combineReducers } from 'redux';

describe('Categories Redux Tests', () => {

  const reducers = combineReducers({
    categories: categoryReducer
  })

  const store = createStore(reducers);

  test('Store should have an array of categories and an active category designator', () =>{
    const state = store.getState();
    expect(state.activeCategory).toEqual('');
  })
})
git 