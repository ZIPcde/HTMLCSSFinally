// formRandomiser.jsx 2 вариант
import React from "react";
import productList from '../../productStore/productList.js';
import Card from '../../productStore/card.jsx';
import './formRandomiser.css';

function getRandomIndexes(array) {
    const indexes = [];
    const arrayLength = array.length;
  
    while (indexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * arrayLength);
  
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
  // console.log(indexes.join(', '));
    return indexes;
  };
  const randomIndexes = getRandomIndexes(productList);
  function MyFormRandom() {
    return (
      <div className="product_holder">
        {randomIndexes.map((index) => {
          const product = productList[index]; 
  
          // Импортируем компоненты из путей, указанных в поле folder
          // const Component = Card(index);
  
          return <Card key={index} indexout={product.id} />;
          // return <button>Добавить в корзину</button>;
        })}
        {/* <Card /> */}
      </div>
    );
  }
  
  export default MyFormRandom;
