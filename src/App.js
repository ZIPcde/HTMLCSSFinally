import Nav from './components/nav/nav';
import './App.css';
import Ofis from '../src/picts/ofis.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <img src={Ofis} alt="777" />
    </div>
  );
}

export default App;
