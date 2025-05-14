import { Link } from "react-router-dom";
import copoCode from "../assets/Copo_code.svg";
// import bgHome from "../assets/bg_home.svg"

const Home = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-3 bg-[url(../../public/bg_home.svg)] bg-gray-900 py-12 h-full">

            <div className="flex items-center gap-6">

                <img src={copoCode} alt="Imagem de uma caneta de códigos" className="w-72" />

                <div className="flex flex-col text-center text-sky-50 uppercase">
                    <span className="text-2xl text-green-400 font-bold">Vanderley Oliveira</span>
                    <h1 className="text-4xl mb-3.5 font-bold">FullStack Developer</h1>
                    <span className="text-xs">Aumente o leque de possibilidades da sua equipe tech com um dev FullStack</span>
                </div>
            </div>

            <Link to={'/sobre'} className="bg-green-400 rounded p-2 w-3xs text-center uppercase font-bold">
                <span>Conheça meu trabalho</span>
            </Link>
        </section>
    );
}

export default Home;