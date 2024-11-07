import React from 'react';

function Item({ id, title, description, price, pictureUrl }) {
  return (
    <div className="Item" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <img
        src={pictureUrl}
        alt={title}
        style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: 'bold' }}>Preço: R$ {price.toFixed(2)}</p>
    </div>
  );
}

export default Item;

