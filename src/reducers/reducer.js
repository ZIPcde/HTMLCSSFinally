// reducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../components/Cart/actions';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.productId === productId);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        return { ...state, cartItems: updatedCartItems };
      } else {
        const productToAdd = productList.find(product => product.id === productId);
        if (productToAdd) {
          return { ...state, cartItems: [...state.cartItems, { productId, quantity: 1, ...productToAdd }] };
        } else {
          return state;
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload)
      };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
