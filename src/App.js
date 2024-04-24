import Nav from './components/nav/nav';
import Header from './components/header/header';
import Offer from './components/offer/offer';
import Products from './components/products/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Offer />
      <Products />
    </div>
  );
}

export default App;
