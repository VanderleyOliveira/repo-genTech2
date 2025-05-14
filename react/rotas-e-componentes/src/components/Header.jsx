import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/logo/logo-transparent.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center dark:bg-gray-900 p-5 border border-b-green-400 absolute top-0 w-full">
            <div className="size-10 rounded-full">
                <Link to={'/'}>
                    <img src={Logo} alt="Logomarca do desenvolvedor" />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-8 text-sky-50 mr-4">
                    <li><NavLink to={'/'}>INÍCIO</NavLink></li>
                    <li><NavLink to={'/sobre'}>SOBRE MIM</NavLink></li>
                    <li><NavLink to={'/projetos'}>PROJETOS</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;