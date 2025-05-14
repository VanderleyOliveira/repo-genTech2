import Card from "../components/Card";
import coffeExpress from "../../public/coffe-express-print.png"
import lpTomJazz from "../../public/lp-print.png"

const Projects = () => {
    return (
        <section className="h-full flex flex-col justify-center items-center bg-gray-900 py-10 gap-5">

            <h1 className="text-4xl text-sky-50 uppercase font-bold">Projetos</h1>

            <div className="grid grid-cols-2 gap-x-4">
                <Card
                    image={coffeExpress}
                    titleProject='Coffe Express'
                    route='coffe-express'
                />
                <Card
                    image={lpTomJazz}
                    titleProject='Tom Jazz School'
                    route='lp-tom-jazz-school'
                />
            </div>
        </section>
    );
}

export default Projects;