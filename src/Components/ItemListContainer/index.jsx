import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList.jsx';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const mockItems = [
        { id: 1, title: "Camisetas", description: "Camiseta Básica Poliamida", price: 89.99, pictureUrl: "/assets/camiseta-rosa.jpg" },
        { id: 2, title: "Calças", description: "Calça Jeans com Elastano", price: 189.99, pictureUrl: "/assets/calca-jeans.jpg" },
        { id: 3, title: "Jaquetas", description: "Moletom Básico", price: 119.99, pictureUrl: "/assets/moletom-preto.jpg" },
        { id: 4, title: "Acessórios", description: "Boné SnapBack", price: 99.99, pictureUrl: "/assets/bone-marsala.jpg" },
      ];

      return new Promise((resolve) => {
        setTimeout(() => resolve(mockItems), 2000);
      });
    };

    fetchItems().then((data) => setItems(data));
  }, []);

  const handleAddToCart = (id, quantity) => {
    console.log(`Produto ID: ${id}, Quantidade adicionada ao carrinho: ${quantity}`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={items} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;
