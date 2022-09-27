import axios from 'axios';

const initialState = [
  {
    name: 'Electronics',
    description: 'Edison devices'
  },
  {
    name: 'Tools',
    description: 'stuff builder helpers'
  },
];

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload.results
    default:
      return state;
  }
}
