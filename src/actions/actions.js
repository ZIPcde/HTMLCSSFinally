// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; // добавлено новое действие

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const updateQuantity = (productId, quantity) => ({ // добавлено новое действие
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
});
