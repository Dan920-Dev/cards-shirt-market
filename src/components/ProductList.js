// En un componente, por ejemplo, ProductsList.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Card from './Card'

function ProductList({ endpoint }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Endpoint is: ', endpoint);
    api.get(`/${endpoint}`) 
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        
        console.error("Error al obtener los productos:", error);
      });
  }, [endpoint]);

  // Renderizado
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-sm-4" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
