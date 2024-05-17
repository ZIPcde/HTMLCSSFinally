// formRandomiser.jsx 1 вариант
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
  const itemsPerPage = 3;
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
      <div className="pagination_center">
      <div className="pagination">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black"/>
          </svg>
      {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => index + 1).map(number => (
  <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
    {number}
  </button>
))}
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black"/>
          </svg>
      </div>
      </div>
    </div>
  );
}

export default MyFormRandom;