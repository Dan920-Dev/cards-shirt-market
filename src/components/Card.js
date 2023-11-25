import React, { useState } from 'react';
import ProductModal from './ProductModal'; // Asegúrate de que la ruta de importación sea correcta.

function ProductCard({ product }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="card" style={{ width: "17rem", marginBottom: "1rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{ width: '150px', height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
          {product.state && <span className="badge bg-success">En Stock</span>}
          <div className="mt-2">
            <button onClick={() => setModalShow(true)} className="btn btn-primary">
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="x1"
        centered
        product={product}
      />
    </>
  );
}

export default ProductCard;
