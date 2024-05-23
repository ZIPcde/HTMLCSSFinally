import React, { useState } from 'react';
import productList from '../productStore/productList.js';
import "./SliderComponent.css";
import AddToCartButton from '../Cart/AddToCartButton.js';

// const productListOf = productList

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
        <div className='product-section'>
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
          <div className="product_discr_holder">
              <h3 className='red'>{(currentProduct.gender === "woman" ? "WOMEN COLLECTION" : "MEN COLLECTION")}</h3>
                              <svg width="63" height="4" viewBox="0 0 63 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70"/>
                </svg>
              <h3 className='maintheme_low4 lato fontweight400'>{currentProduct.productName}</h3>
              <p className='maintheme_low5 lato product_discription__text fontweight200'>{currentProduct.ptoductDiscr}</p>
              {/* <p>Цвет: {currentProduct.color}</p>
              <p>Размер: {currentProduct.size}</p> */}
              <p className='red'>$ {currentProduct.price}</p>
                            <svg className='product_line' width="642" height="1" viewBox="0 0 642 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0.498291H641.5H0.5Z" stroke="#EAEAEA" stroke-linejoin="round"/>
                  </svg>
                  <ul className='product_switcher maintheme_low6'>
                    <li>CHOOSE COLOR <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00214 5.64847C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20113 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81724 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64847V5.64847Z" fill="#6F6E6E"/>
</svg>
</li>
                    <li>CHOOSE SIZE <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00214 5.64847C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20113 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81724 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64847V5.64847Z" fill="#6F6E6E"/>
</svg>
</li>
                    <li>QUANTITY <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00214 5.64847C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20113 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81724 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64847V5.64847Z" fill="#6F6E6E"/>
</svg>
</li>
                  </ul>
                  <div className="product_btn__addtocart">
                  <AddToCartButton productId={currentProduct.id}/>
                  </div>
          </div>
          </div>
      )}
      
      
    </div>
  );
};

export default SliderComponent;