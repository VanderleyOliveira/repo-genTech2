import { Link, useParams } from 'react-router-dom';

const Product = () => {

    const { id, name } = useParams();

    return (
        <>
            <h1>Produto</h1>
            <h2>#{id} - {name}</h2>

            <Link to={'/produtos'}>Voltar para lista de produtos</Link>
        </>
    );
};

export default Product;