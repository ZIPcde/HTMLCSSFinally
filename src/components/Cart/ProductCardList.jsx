import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import productList from "../productStore/productList";
import { removeFromCart, updateQuantity } from "../../actions/actions"; 

const mapStateToProps = (state) => {
  const { cartItems } = state.cart;
  const productIds = cartItems.map(item => item.productId);
  const products = productIds.map(productId => {
    const product = productList.find(product => product.id === productId);
    const quantity = cartItems.filter(item => item.productId === productId).length;
    return { ...product, quantity };
  });

  return {
    products
  };
};

const handleDecreaseQuantity = (quantity, id, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo) => {
  if (quantity > 1) {
    onUpdateQuantity(id, quantity - 1);
    setSubTotal(subTotal - price);
    updateProductInfo(id, quantity - 1, price);
  }
};

const handleIncreaseQuantity = (id, quantity, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo) => {
  onUpdateQuantity(id, quantity + 1);
  setSubTotal(subTotal + price);
  updateProductInfo(id, quantity + 1, price);
};

const ProductCard = ({ product, quantity, onRemove, onUpdateQuantity, updateProductInfo }) => {
  const { id, folder, productName, productDiscr, color, size, price } = product;
  const [subTotal, setSubTotal] = useState(quantity * price);

  const handleRemove = () => {
    onRemove(id);
  };

  useEffect(() => {
    setSubTotal(quantity * price);
  }, [quantity, price]);

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
      <button onClick={() => handleDecreaseQuantity(quantity, id, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo)}>-</button>
      <button onClick={() => handleIncreaseQuantity(id, quantity, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo)}>+</button>
      <p>SUB TOTAL: ${subTotal}</p>
    </div>
  );
};

const ProductCardList = ({ products, onRemove, onUpdateQuantity }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const updateProductInfo = (productId, newQuantity, price) => {
    const updatedProductsCopy = updatedProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: newQuantity,
        };
      }
      return product;
    });
    setUpdatedProducts(updatedProductsCopy);
  };

  const grandTotal = updatedProducts.reduce((total, product) => total + product.quantity * product.price, 0);

  return (
    <div className="product-holder">
      {updatedProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          quantity={product.quantity}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
          updateProductInfo={updateProductInfo}
        />
      ))}
      <p>GRAND TOTAL: ${grandTotal}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (productId) => dispatch(removeFromCart(productId)),
  onUpdateQuantity: (productId, quantity) => dispatch(updateQuantity(productId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardList);
