import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget";
import { useCart } from "../../Context/CartContext";  // Importando o hook personalizado
import "./style.css";

function NavBar() {
  const { getTotalItems } = useCart();  // Consumindo o número total de itens

  return (
    <div className="NavBar">
      <h1>Magtil Store</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Produtos</Link></li>
          <li><Link to="/novidades">Novidades</Link></li>
        </ul>
      </nav>

      {/* Link para o carrinho com o contador de itens */}
      <Link to="/cart" className="cart-link">
        <CartWidget />
        {getTotalItems() > 0 && ( // Exibe o número de itens apenas se maior que 0
          <span className="cart-counter">{getTotalItems()}</span>
        )}
      </Link>
    </div>
  );
}

export default NavBar;


