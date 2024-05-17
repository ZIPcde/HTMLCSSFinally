import React, { useState } from 'react';
import productList from '../productStore/productList.js';
import "./SliderComponent.css";
const productListOf = productList

const SliderComponent = ({ productListOf }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const currentProduct = productList && productList.length > 0 ? productList[currentProductIndex] : {};

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === productList.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? productList.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      {currentProduct && (
        <div>
          <div className="product_img-holder" style={{ backgroundColor: currentProduct.backgroundColor }}>
            <div onClick={handlePrev} className="product_img__left-arrow product_arrows">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="currentColor"/>
          </svg>
            </div>
              <img className='product_img__img' src={require(`../productStore/${currentProduct.folder}`)} alt={currentProduct.productName} />
              <div onClick={handleNext} className="product_img__right-arrow product_arrows">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="currentColor"/>
          </svg>
            </div>
          </div>
          <div className="discr_holder">
              <h3>{(currentProduct.gender === "woman" ? "WOMEN COLLECTION" : "MEN COLLECTION")}</h3>
              <h3>{currentProduct.productName}</h3>
              <p>{currentProduct.ptoductDiscr}</p>
              {/* <p>Цвет: {currentProduct.color}</p>
              <p>Размер: {currentProduct.size}</p> */}
              <p className='red'>$ {currentProduct.price}</p>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default SliderComponent;