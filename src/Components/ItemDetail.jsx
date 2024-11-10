import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} style={{ width: '300px', height: '300px' }} />
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
    </div>
  );
}

export default ItemDetail;
