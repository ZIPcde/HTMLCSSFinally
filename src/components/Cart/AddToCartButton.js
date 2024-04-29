// AddToCartButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/actions';

function AddToCartButton({ productId }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productId));
  };
// console.log(productId);
  return (
    <button onClick={handleAddToCart}>Добавить в корзину</button>
  );
}

export default AddToCartButton;
