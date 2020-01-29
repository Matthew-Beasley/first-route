import React from 'react';
import qs from 'qs';

const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => {
          return <li key={product.id}>{product.name}<br></br>{product.price}</li>
        })}
      </ul>
    </div>
  )
}

export default Products;