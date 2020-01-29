import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Nav from './components/Nav';
import Products from './components/Products';
import Companies from './components/Companies';

const API = 'https://acme-users-api-rev.herokuapp.com';
const getHash = () => window.location.hash.slice(1);

function App() {
  const [products, setProducts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    axios.get(`${API}/api/companies`)
      .then(response => setCompanies(response.data));
  }, []);

  useEffect(() => {
    axios.get(`${API}/api/products`)
    .then(response => setProducts(response.data))
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
      //console.log(getHash())
    })
/*
    if (!['products', 'companies'].includes(getHash())) {
      setParams(getHash());
    }
*/
  }, [])

  return (
    <div className="App">
      <Nav products={products} companies={companies} params={params} />
      <main>
        { params.view === 'products' && <Products products={products} /> }
        { params.view === 'companies' && <Companies companies={companies}/> }
      </main>
    </div>
  );
}

export default App;
