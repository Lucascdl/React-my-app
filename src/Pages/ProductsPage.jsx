import React, { useState } from 'react';
import ItemListContainer from '../Components/ItemListContainer';
import './ProductsPage.css';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="products-page">
      <aside className="sidebar">
        <h3>Categorias</h3>
        <ul>
          <li onClick={() => handleCategoryChange('')}>Todos</li>
          <li onClick={() => handleCategoryChange('Camisetas')}>Camisetas</li>
          <li onClick={() => handleCategoryChange('Calças')}>Calças</li>
          <li onClick={() => handleCategoryChange('Shorts')}>Shorts</li>
          <li onClick={() => handleCategoryChange('Jaquetas')}>Jaquetas</li>
          <li onClick={() => handleCategoryChange('Acessórios')}>Acessórios</li>
        </ul>
      </aside>

      <main className="products-list">
        {}
        <ItemListContainer 
          greeting="Nossos Produtos" 
          selectedCategory={selectedCategory} 
          isHomePage={false}
        />
      </main>
    </div>
  );
}

export default ProductsPage;


