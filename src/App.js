import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Context/CartContext'; // Importando o CartProvider

function App() {
  return (
    <CartProvider> {/* Envolvendo com o provedor do contexto */}
      <Router>
        <div className="App">
          <NavBar /> {/* Menu de navegação */}
          <Routes>
            {/* Página inicial */}
            <Route 
              path="/" 
              element={<ItemListContainer greeting="Magtil Store" isHomePage={true} />} 
            />
            {/* Página de produtos */}
            <Route path="/products" element={<ProductsPage />} />
            {/* Página do carrinho */}
            <Route path="/cart" element={<CartPage />} />
            {/* Página de detalhes do produto */}
            <Route path="/product/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




