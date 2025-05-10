import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', backgroundColor: '#a7c5b0' }}>
            <h1 style={{fontFamily: 'monospace'}}>LOGO</h1>
            <nav>
                <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;