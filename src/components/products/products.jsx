import React from 'react';
import "./products.css";
import '../../fonts/Lato-Regular.ttf';
import '../../fonts/Lato-Bold.ttf';

async function fetchData() {
    // Имитация задержки в 3 секунды
    await new Promise(resolve => setTimeout(resolve, 3000));
  
    // Получение JSON из локального файла (предположим, файл называется data.json)
    const response = await fetch('data.json');
    const data = await response.json();
  
    // Распарсивание JSON в массив объектов
    const arrayOfObjects = JSON.parse(data);
  
    return arrayOfObjects;
  }
  
  // Вызов асинхронной функции и обработка результата
  fetchData()
    .then(data => {
      console.log('Массив объектов:', data);
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });

const Products = () => {
    return (
        <div>
            <div>
                <h2 class="h2up">Fetured Items</h2>
                <h3 class="h3up">Shop for items based on what we featured in this week</h3>
            </div>
            <div class="divbtndown">
                <button class="btndown">Browse All Product</button>
            </div>
        </div>
    );
}

export default Products;