import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <div>
            <h1>Página não encontrada, bro</h1>
            <Link to={'/'}>Volte para tela de login</Link>
        </div>
     );
}
 
export default Page404;