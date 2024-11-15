import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget";
import "./style.css";

function NavBar() {
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

            {}
            <Link to="/cart">
                <CartWidget />
            </Link>
        </div>
    );
}

export default NavBar;

