import "./style.css"

function NavBar () {
    return (
        <div className="NavBar">
            <h1> Magtil Store</h1>

            <nav>
                <ul>
                    <li><a href="https://www.google.com/" >Home</a></li>
                    <li><a href="https://www.google.com/" >Produtos</a></li>
                    <li><a href="https://www.google.com/" >Novidades</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;