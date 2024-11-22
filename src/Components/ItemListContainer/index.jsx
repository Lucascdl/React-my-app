import React, { useState, useEffect } from 'react';
import { products } from '../../Data/Products';
import ItemList from '../ItemList.jsx';
import { useCart } from '../../Context/CartContext';

function ItemListContainer({ greeting, selectedCategory, isHomePage }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { addToCart } = useCart();

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

  const handleAddToCart = (item, quantity) => {
      addToCart(item, quantity);
      console.log(`Adicionado ao carrinho: ${item.title} - Quantidade: ${quantity}`);
    
  };
  

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={filteredItems} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;


