import Nav from './components/nav/nav';
import Header from './components/header/header';
import Offer from './components/offer/offer';
import Products from './components/products/products';
import Discount from './components/discount/discount';
import Subscribe from './components/subscribe/subscribe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Offer />
      <Products />
      <Discount />
      <Subscribe />
    </div>
  );
}

export default App;
