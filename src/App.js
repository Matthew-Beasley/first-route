import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com';

function App() {
  const [products, setProducts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState('products');


  useEffect(() => {
    axios.get(`${API}/api/companies`)
      .then(response => setCompanies(response.data));
  }, []);

  useEffect(() => {
    axios.get(`${API}/api/products`)
    .then(response => setProducts(response.data))
  });


  return (
    <div className="App">
      <nav>

      </nav>
      <main>
        { view === 'products' && <Products products={products} /> }
        { view === 'companies' && <Companies companies={companies}/> }

      </main>
    </div>
  );
}

export default App;
