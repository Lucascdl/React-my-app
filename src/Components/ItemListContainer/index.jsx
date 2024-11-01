import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({ greeting }) {
  const handleAdd = (quantity) => {
    console.log(`Quantidade adicionada ao carrinho: ${quantity}`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      {}
      <ItemCount stock={10} initial={0} onAdd={handleAdd} />
    </div>
  );
}

export default ItemListContainer;
