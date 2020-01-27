import React from 'react';

const Nav = ({ view, setView, companies, products }) => {
  return (
    <nav>
      {<a href="#" className={veiw === 'products' ? 'selected' : ''} onClick={() => setView('products')}>
        Products ({products.length})</a>}
      {<a href="#" className={veiw === 'companies' ? 'selected' : ''} onClick={() => setView('companies')}>
        Products ({companies.length})</a>}
    </nav>
  )
}

export default Nav;