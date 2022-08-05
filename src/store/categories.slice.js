import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: 'initial category',
    categories: [
      {
        name: 'Electronics',
        description: 'Edison devices'
      },
      {
        name: 'Tools',
        description: 'stuff builder helpers'
      },
    ]
  },
  // initialState: {
  //   categories: [
  //     {
  //       name: 'Electronics',
  //       products: [
  //         {
  //           productName: 'TV',
  //           price: '$599.99',
  //           description: '"The Office" player'
  //         },
  //         {
  //           productName: 'Macbook',
  //           price: '1299.99',
  //           description: 'Code machine'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Tools',
  //       products: [
  //         {
  //           productName: 'Screwdriver',
  //           price: '$129.99',
  //           description: 'battery-powered tool to drive screws'
  //         },
  //         {
  //           productName: 'wrench',
  //           price: '$5.99',
  //           description: 'manual tool for tightening/loosening bolts/nuts'
  //         }
  //       ]
  //     },
  //   ],
  //   activeCategory: ''
  // },

  reducers: {
    set(state, action) {
      return {...state, categories: {...action.payload}}
    },
    activateCategory(state, action) {
      return {
        categories: state.categories,
        activeCategory: action.payload
      }
    }
  },
});

export const getCategories = () => async (dispatch, getState) => {
  const { set } = categoriesSlice.actions;
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(set(response.data))
  } catch (e) {
    console.log('getCategory error', e);
  }
}

export default categoriesSlice;