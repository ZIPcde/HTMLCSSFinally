import React from "react";
import { useSelector } from 'react-redux';
import productList from '../productStore/productList.js';
import Card from '../productStore/card.jsx';
import './ProductList.css';

function ProductList() {
  // Получение состояния корзины из Redux
  const cartItems = useSelector(state => state.cart.cartItems);

  // Получение списка id товаров из состояния корзины
  const productIdsInCart = cartItems.map(item => item.productId);

  // Фильтрация продуктов на основе полученных id
  const productsToDisplay = productList.filter(product => productIdsInCart.includes(product.id));

  return (
    <div className="product_holder next-element">
      {cartItems.length === 0 ? (
        <div className="empty_cart">Корзина пуста</div>
      ) : (
        productsToDisplay.map((product, index) => (
          <Card key={index} indexout={product.id} />
        ))
      )}
    </div>
  );
}

export default ProductList;