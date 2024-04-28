import React, { useState } from "react";
import productList from '../../productStore/productList.js';
import Card from '../../productStore/card.jsx';
import './formRandomiser.css';

function MyFormRandom() {
  // Используем состояние для хранения выбранных размеров
  const [selectedSizes, setSelectedSizes] = useState({
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false
  });

  // Функция для обновления состояния выбранных размеров
  const handleSizeChange = (size) => {
    setSelectedSizes(prevState => ({
      ...prevState,
      [size]: !prevState[size]
    }));
  };

  // Фильтрация продуктов на основе выбранных размеров
  const filteredProducts = productList.filter(product => {
    return Object.keys(selectedSizes).some(size => {
      // Если не выбран ни один размер, возвращаем true, чтобы отобразить все товары
      if (Object.values(selectedSizes).every(val => !val)) {
        return true;
      }
      // Если выбран только один размер, возвращаем true для товаров, соответствующих этому размеру
      if (Object.values(selectedSizes).filter(val => val).length === 1) {
        return selectedSizes[size] && product.size === size;
      }
      // Если выбрано несколько размеров, возвращаем true для товаров, соответствующих всем выбранным размерам
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
      <div className="sizes">
        {Object.keys(selectedSizes).map((size, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedSizes[size]}
              onChange={() => handleSizeChange(size)}
            />
            {size}
          </label>
        ))}
      </div>
      <div className="product_holder">
        {/* Используем текущие отфильтрованные товары для отображения */}
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
