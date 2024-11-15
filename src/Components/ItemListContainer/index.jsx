import React, { useState, useEffect } from 'react';
import { products } from '../../Data/Products';
import ItemList from '../ItemList.jsx';

function ItemListContainer({ greeting, selectedCategory, isHomePage }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      
      let availableProducts = isHomePage
        ? products.slice(0, 4)
        : products;

      return new Promise((resolve) => {
        setTimeout(() => resolve(availableProducts), 2000);
      });
    };

    fetchItems().then((data) => setItems(data));
  }, [isHomePage]);

  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(items.filter(item => item.title === selectedCategory));
    } else {
      setFilteredItems(items);
    }
  }, [items, selectedCategory]);

  const handleAddToCart = (id, quantity) => {
    console.log(`Produto ID: ${id}, Quantidade adicionada ao carrinho: ${quantity}`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={filteredItems} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;

