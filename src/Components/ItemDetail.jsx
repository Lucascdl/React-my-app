import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item, quantity);
    setQuantity(0);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
      <button onClick={handleAdd}>Adicionar ao Carrinho</button>
      {quantity > 0 && <button>Finalizar minha compra</button>}
    </div>
  );
}

export default ItemDetail;
