import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const getItemById = (id) => {
  const mockItems = [
    { id: 1, title: "Camiseta Básica Poliamida", description: "Uma camiseta básica de poliamida, confortável e ideal para o dia a dia.", price: 89.99, pictureUrl: "/assets/camiseta-rosa.jpg" },
    { id: 2, title: "Camiseta de Algodão", description: "Camiseta leve de algodão para o verão.", price: 79.99, pictureUrl: "/assets/camiseta-verde.jpg" },
  ];

  return mockItems.find(item => item.id === parseInt(id));
};

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchedItem = getItemById(id);
    setItem(fetchedItem);
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
