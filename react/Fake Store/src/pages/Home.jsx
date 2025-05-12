import { useEffect, useState } from "react";
import { API } from "../services";

const Home = () => {

    const [produtos, setProdutos] = useState([]);

    async function buscarProdutos() {
        const resquest = await API.get('/products');
        setProdutos(resquest.data);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <section className="overflow-hidden p-5">

            <h1 className="font-italic">Lista de Produtos</h1>

            <ul className="grid list-none p-0">
                {produtos.map(produto => (
                    <li key={produto.id} className="col-12 sm:col-6 md:col-4 lg:col-3">
                        <div className="shadow-4 p-3 border-round-md">
                            <div className="relative">
                                <img src={produto.image} alt={produto.title} className="w-full" style={{ height: '200px', objectFit: 'contain' }} />
                                <h6 className="absolute top-0 right-0 bg-blue-400 py-1 px-2 border-round-md">{produto.rating.rate}</h6>
                            </div>
                            <h3 className="mb-0 font-italic text-overflow-ellipsis white-space-nowrap overflow-hidden">{produto.title}</h3>
                            <h6 className="mt-0 text-primary">{produto.category}</h6>
                            <h2 className="mb-0">R${produto.price}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Home;