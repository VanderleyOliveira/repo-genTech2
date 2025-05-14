import { Link } from "react-router-dom";

const Card = ({ image, titleProject, route }) => {
    return (
        <div className="flex flex-col gap-2 bg-slate-700 rounded-xl p-2.5">
            <img src={image} alt={titleProject} className="rounded-t-xl rounded-b-md h-[250px] w-[350px] object-cover object-top" />

            <h2 className="text-sky-50 font-bold">{titleProject}</h2>

            <Link to={route} className="bg-green-400 rounded p-2 w-full text-center font-bold">
                <span className="text-gray-900">Visualizar</span>
            </Link>
        </div>
    );
}

export default Card;