// ProductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProductModal({ product, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
        <p>Id de producto: {product.id}</p>
        <p>{product.description}</p>
        <p>Categoria: {product.cat_name}</p>
        <p className="text-muted">Precio: ${product.price}</p>
        {product.state && <div className="badge bg-success">En Stock</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
