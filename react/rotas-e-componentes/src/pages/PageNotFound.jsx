import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="dark:bg-gray-900 h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="text-sky-50 mb-2 text-3xl">404 - Página não encontrada</h1>
            <h2 className="text-sky-50 mb-2 text-2xl">Parece que alguém se perdeu</h2>
            <Link to={"/"} className="text-green-400">Voltar para início</Link>
        </div>
    );
}

export default PageNotFound;