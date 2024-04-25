import React from "react";
import productList from './productStore/productList.js';
import Card from './productStore/card.jsx';
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
  
    return indexes;
  };
  const randomIndexes = getRandomIndexes(productList);
  function MyFormRandom() {
    return (
      <form className="product_holder">
        {randomIndexes.map((index) => {
        //   const { folder } = productList[index]; 
  
          // Импортируем компоненты из путей, указанных в поле folder
          // const Component = Card(index);
  
          return <Card key={index} indexout={index} />;
        })}
        {/* <Card /> */}
      </form>
    );
  }
  
  export default MyFormRandom;
