import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_QUANTITY } from '../actions/actions';
import productList from '../components/productStore/productList';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productIdToAdd = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(item => item.productId === productIdToAdd);
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity + 1
        };
        return { ...state, cartItems: updatedCartItems };
      } else {
        const productToAdd = productList.find(product => product.id === productIdToAdd);
        if (productToAdd) {
          return { ...state, cartItems: [...state.cartItems, { productId: productIdToAdd, quantity: 1, ...productToAdd }] };
        } else {
          return state;
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload)
      };
    case UPDATE_QUANTITY:
      const { productId, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      );
      return { ...state, cartItems: updatedCartItems };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
