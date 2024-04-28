import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/index/index';
import Catalog from './components/Catalog/Catalog';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />

          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
