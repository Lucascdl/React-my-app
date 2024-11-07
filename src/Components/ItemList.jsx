import React from 'react';
import Item from './Item.jsx';
import ItemCount from './ItemCount.jsx';

function ItemList({ items, onAddToCart }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card" style={{ marginBottom: '20px' }}>
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
          {}
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(quantity) => onAddToCart(item.id, quantity)}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;


