import { Link } from "react-router-dom";

const PageProducts = () => {

    const productList = [
        { id: 1, name: 'Banana' },
        { id: 2, name: 'Maçã' },
        { id: 3, name: 'Abacate' },
        { id: 4, name: 'Espinafre' },
        { id: 5, name: 'Cenoura' }
    ];

    return (
        <>
            <h1>Produtos</h1>

            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        <Link to={`produto/${product.id}/${product.name}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PageProducts;