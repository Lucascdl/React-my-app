import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../Context/CartContext'; // Importa o contexto do carrinho
import { Link } from 'react-router-dom'; // Importando o Link para navegação

function ItemDetail({ item }) {
  const { addToCart } = useCart(); // Hook para usar a função do contexto
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity); // Adiciona o item ao carrinho
    setIsAdded(true); // Marca que o item foi adicionado
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
        <p>{item.quantity} item(s) adicionado(s) ao carrinho!</p>
      )}

      {isAdded && (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;

