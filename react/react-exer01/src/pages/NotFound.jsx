import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
            <h2>Página não encontrada</h2>
            <Link to='/'>Voltar para home</Link>
        </div>
    );
}

export default PageNotFound;