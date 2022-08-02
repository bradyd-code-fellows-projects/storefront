const initialState = {
  categories: [
    {
      name: 'Electronics',
      products: [
        {
          productName: 'TV',
          price: '$599.99',
          description: '"The Office" player'
        },
        {
          name: 'Macbook',
          price: '1299.99',
          description: 'Code machine'
        }
      ]
    },
    {
      name: 'Tools',
      products: [
        {
          name: 'Screwdriver',
          price: '$129.99',
          description: 'battery-powered tool to drive screws'
        },
        {
          name: 'wrench',
          price: '$5.99',
          description: 'manual tool for tightening/loosening bolts/nuts'
        }
      ]
    }
  ],
  activeCategory: '',
};

function categoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SELECT_CATEGORY':
      return {
        ...state, activeCategory: payload
      }
    case 'RESET':
      return initialState;

    default:
      return state
  }
};

export const selectCategory = (category) => {
  console.log(`selected ${category}`)
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
};

export const reset = () => {
  return { type: 'RESET' }
};

export default categoryReducer;