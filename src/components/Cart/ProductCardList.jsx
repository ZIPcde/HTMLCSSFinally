import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import productList from "../productStore/productList";
import { removeFromCart, updateQuantity } from "../../actions/actions";
import CartControls from './CartControls'; 
import "./ProductCardList.css";

const mapStateToProps = (state) => {
  const { cartItems } = state.cart;
  const productIds = cartItems.map(item => item.productId);
  const products = productIds.map(productId => {
    const product = productList.find(product => product.id === productId);
    const quantity = cartItems.find(item => item.productId === productId).quantity;
    const backgroundColor = cartItems.find(item => item.productId === productId).backgroundColor;
    // const quantity = cartItems.filter(item => item.productId === productId).length;
    return { ...product, quantity, backgroundColor };
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
  const { id, folder, productName, productDiscr, color, size, price, backgroundColor } = product;
  const [subTotal, setSubTotal] = useState(quantity * price);

  const handleRemove = () => {
    onRemove(id);
  };

  useEffect(() => {
    setSubTotal(quantity * price);
  }, [quantity, price]);

  return (
    <div className="product-card">
      <div className="card_img-holder-cutter" style={{ backgroundColor }}>
      <img className="card_img" src={require(`../productStore/${folder}`)} alt={productName} />
      </div>
      <div className="card_info-holder">
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
    <div className="product-holder next-element">
      <div className="product-holder-collection">
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
        <CartControls />
      </div>
      <div className="cart_form">
        <div className="cart_shippingadress">
          <h3>SHIPPING ADRESS</h3>
          <form action="#">
            <input type="text" placeholder="Bangladesh" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Postcode / Zip" />
            <button>GET A QUOTE</button>
          </form>
        </div>
        <div className="cart_total__holder">
          <div className="cart_total__p-holder">
            <p>GRAND TOTAL: ${grandTotal}</p>
          </div>
          <div className="line"></div>
          <div className="cart_total__btn-holder">
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (productId) => dispatch(removeFromCart(productId)),
  onUpdateQuantity: (productId, quantity) => dispatch(updateQuantity(productId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardList);
