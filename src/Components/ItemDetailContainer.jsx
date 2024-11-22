import React, { useState, useEffect } from 'react';
import { products } from '../Data/Products';
import ItemList from './ItemList.jsx';
import { useCart } from '../Context/CartContext';

function ItemListContainer({ greeting, selectedCategory, isHomePage }) {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItems = async () => {
            let availableProducts = isHomePage ? products.slice(0, 4) : products;

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
      const product = items.find((item) => item.id === id);
      if (product) {
        addToCart(product, quantity);
        console.log(`Produto adicionado ao carrinho:`, product, `Quantidade:`, quantity);
      }
    };

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList items={filteredItems} onAddToCart={handleAddToCart} />
        </div>
    );
}

export default ItemListContainer;

