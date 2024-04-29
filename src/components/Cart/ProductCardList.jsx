import React, { useState } from "react";
import { connect } from "react-redux";
import productList from "../productStore/productList";
import { removeFromCart, updateQuantity } from "../../actions/actions"; // добавлены импорты

const mapStateToProps = (state) => {
    // Получаем массив товаров из Redux-стейта
    const { cartItems } = state.cart;
  
    // Преобразуем массив товаров в массив id
    const productIds = cartItems.map(item => item.productId);
  
    // Получаем данные о товарах из productList.js и добавляем количество товаров
    const products = productIds.map(productId => {
      const product = productList.find(product => product.id === productId);
      const quantity = cartItems.filter(item => item.productId === productId).length;
      return { ...product, quantity };
    });
  
    return {
      products
    };
  };

function ProductCard({ product, quantity, onRemove, onUpdateQuantity }) {
  const { id, folder, productName, productDiscr, color, size, price } = product;
  const [subTotal, setSubTotal] = useState(quantity * price);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
      setSubTotal(subTotal - price);
    }
  };

  const handleIncreaseQuantity = () => {
    onUpdateQuantity(id, quantity + 1);
    setSubTotal(subTotal + price);
  };

  return (
    <div className="product-card">
      <img src={require(`../productStore/${folder}`)} alt={productName} />
      <h3>{productName}</h3>
      <p>{productDiscr}</p>
      <p>Color: {color}</p>
      <p>Size: {size}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleDecreaseQuantity}>-</button>
      <button onClick={handleIncreaseQuantity}>+</button>
      <p>SUB TOTAL: ${subTotal}</p>
    </div>
  );
}

function ProductCardList({ products, onRemove, onUpdateQuantity }) {
  const grandTotal = products.reduce((total, product) => total + product.quantity * product.price, 0);

  return (
    <div className="product-holder">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          quantity={product.quantity}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
      <p>GRAND TOTAL: ${grandTotal}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: (productId) => dispatch(removeFromCart(productId)),
  onUpdateQuantity: (productId, quantity) => dispatch(updateQuantity(productId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardList);
