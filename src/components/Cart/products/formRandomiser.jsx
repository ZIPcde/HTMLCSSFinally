import React, { useState } from "react";
import productList from '../../productStore/productList.js';
import Card from '../../productStore/card.jsx';
import './formRandomiser.css';

function MyFormRandom({ selectedSizes }) {
  // Фильтрация продуктов на основе выбранных размеров
  const filteredProducts = productList.filter(product => {
    return Object.keys(selectedSizes).some(size => {
      if (Object.values(selectedSizes).every(val => !val)) {
        return true;
      }
      if (Object.values(selectedSizes).filter(val => val).length === 1) {
        return selectedSizes[size] && product.size === size;
      }
      return selectedSizes[size] && product.size.includes(size);
    });
  });

  // Пагинация: показываем только первые 9 товаров
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Функция для изменения текущей страницы
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="product_holder">
        {currentProducts.map((product, index) => (
          <Card key={index} indexout={product.id} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => index + 1).map(number => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyFormRandom;