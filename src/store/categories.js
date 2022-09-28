import data from '../data'

const initialState = data.categories;

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload.results
    default:
      return state;
  }
}

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data
  }
}
