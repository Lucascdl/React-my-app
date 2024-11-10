import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = () => {
  const mockItem = {
    id: 1,
    title: "Camiseta Básica Poliamida",
    description: "Uma camiseta básica de poliamida, confortável e ideal para o dia a dia.",
    price: 89.99,
    pictureUrl: "/assets/camiseta-rosa.jpg",
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockItem), 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => setItem(data));
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
