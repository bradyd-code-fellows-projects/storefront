const initialState = {
  categories: [
    { name: 'Electronics', products: ['TV', 'Macbook'] },
    { name: 'Tools', products: ['Screwdriver', 'wrench'] }
  ],
  activeCategory: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        categories: state.map(category => {
          if (category.name === action.name) {
            return {
              name: category.name,
              products: category.products
            }
          }
          return category;
        })
      }
    default:
      return state
  }
};

export const selectCategory = (category) => {
  return {
    type: 'SELECT',
    payload: category
  }
};

export const reset = () => {
  return { type: 'RESET' }
};

export default categoryReducer;