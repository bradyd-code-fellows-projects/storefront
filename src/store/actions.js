export const selectCategory = (category) => {
  console.log('category: ', category);
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
};

export const handleAddToCart = (product) => {
  console.log(`${product.productName} added to cart`);
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const handleDeleteFromCart = (product) => {
  console.log(`${product.productName} removed from cart`);
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}