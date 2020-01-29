import React from 'react';
import qs from 'qs';

const Companies = ({ companies }) => {
  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map(company => {
          return <li key={company.id}>
            <a href={`#${qs.stringify({ view: 'companies', id: company.id })}`}>{company.name}</a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Companies;