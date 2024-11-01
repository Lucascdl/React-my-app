import React, { useState } from 'react';

function ItemCount({ stock, initial = 0, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0 && quantity <= stock) {
      onAdd(quantity);
    }
  };

  return (
    <div style={{ margin: '100px', padding: '10px', border: '0px solid #333' }}>
      <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
      <span style={{ margin: '0 40px' }}>{quantity}</span>
      <button onClick={handleIncrease} disabled={quantity >= stock}>+</button>
      <br />
      <button onClick={handleAddToCart} disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ItemCount;
