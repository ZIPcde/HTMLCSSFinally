import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../actions/actions'; 

function CartControls() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const handleContinueShopping = () => {

  };

  return (
    <div>
      <button onClick={handleClearCart}>CLEAR SHOPPING CART</button>
      <button onClick={handleContinueShopping}>CONTINUE SHOPPING</button>
    </div>
  );
}

export default CartControls;
