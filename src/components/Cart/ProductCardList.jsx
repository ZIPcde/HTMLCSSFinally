import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
import productList from "../productStore/productList";
import { removeFromCart, updateQuantity } from "../../actions/actions";
import CartControls from './CartControls'; 
import cross from './products/img/cross.svg';
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
    <div className="product-card forcheck" data-value={id}>
      <div className="card_img-holder-cutter" style={{ backgroundColor }}>
      <img className="card_img" src={require(`../productStore/${folder}`)} alt={productName} />
      </div>
      <div className="card_info-holder">
        <div className="h3-btn-holder">
          <h3>{productName}</h3>
          {/* <img className="btn-cross-remove" src={cross} onClick={handleRemove} alt="cross" /> */}
          <svg className="btn-cross-remove" onClick={handleRemove} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="currentColor"/>
</svg>

        </div>
      <p>{productDiscr}</p>
      <span className="cart_product-text"><span>Price: </span><span className="red">${price}</span></span>
      <p className="cart_product-text">Color: {color}</p>
      <p className="cart_product-text">Size: {size}</p>
      <div className="quantity-holder cart_product-text">
      <p>Quantity: {quantity}</p>
<div className="plus-minus-holder">
<button onClick={() => handleDecreaseQuantity(quantity, id, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo)}>-</button>
      <button onClick={() => handleIncreaseQuantity(id, quantity, onUpdateQuantity, setSubTotal, subTotal, price, updateProductInfo)}>+</button>
</div>
      </div>
      {/* <button onClick={handleRemove}>Remove</button> */}
      
      <p className="cart_product-total">SUB TOTAL: ${subTotal}</p>
      </div>
    </div>
  );
};

const ProductCardList = ({ products, onRemove, onUpdateQuantity }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  // 
  const cartItems = useSelector(state => state.cart.cartItems); // Получение массива cartItems из Redux store
  const dispatch = useDispatch();
  // 
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

// 
useEffect(() => {
  const elementsForCheck = document.querySelectorAll('.forcheck'); // Поиск всех элементов с классом forcheck
  elementsForCheck.forEach(element => {
    const dataValue = parseInt(element.getAttribute('data-value')); // Получение числового значения из атрибута data-value
    const itemExists = cartItems.some(item => item.id === dataValue); // Проверка наличия объекта с соответствующим id в cartItems
    if (!itemExists) {
      element.remove(); // Удаление элемента из DOM, если объекта нет в cartItems
    }
  });
}, [cartItems]);

// 

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
