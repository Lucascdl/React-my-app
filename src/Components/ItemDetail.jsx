import React, { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (quantity) => {
    setQuantity(quantity);
    setIsAdded(true);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} style={{ width: '300px', height: '300px' }} />
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>

      {!isAdded ? (
        <ItemCount 
          stock={10} 
          initial={1} 
          onAdd={handleAddToCart}
        />
      ) : (
        <p>{quantity} item(s) adicionado(s) ao carrinho!</p>
      )}

      {}
      {isAdded && (
        <button onClick={() => window.location.href = '/cart'}>
          Finalizar Compra
        </button>
      )}
    </div>
  );
}

export default ItemDetail;
