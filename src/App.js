import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Magtil Store" isHomePage={true} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




