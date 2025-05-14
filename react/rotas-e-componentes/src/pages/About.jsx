import { Link } from 'react-router-dom';
import photoProfile from '../assets/profile.svg'

const About = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-gray-900 py-10 px-10 h-full">

            <div className='flex flex-col items-center'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10'>

                    <img src={photoProfile} alt="Foto de perfil no estilo de desenho" className='w-4/12 md:max-w-3/12' />


                    <div className='text-sky-50 w-full md:flex flex-col items-center max-w-3/6 gap-5'>
                        <h1 className='text-4xl font-bold mb-3 text-center uppercase'>Sobre mim</h1>

                        <p className='text-sm text-justify'>
                            Me chamo Vanderley, sou um desenvolvedor Front-end com foco em criar soluções web modernas, responsivas e alinhadas às exigências do mercado atual. Tenho conhecimento nas principais tecnologias front-end como: HTML, CSS, JavaScript, React e entre outras tecnologias. Além disso, também desenvolvo sites completos com WordPress e Elementor, integrando código, design e funcionalidade de forma estratégica. Estou apto para atuar em projetos como freelancer ou por meio de contratos, sempre com comprometimento, qualidade e foco em resultados reais.
                        </p>
                        
                        <Link to={'/projetos'} className="bg-green-400 text-gray-900 rounded p-2 w-3xs text-center uppercase font-bold">
                            <span>Visualizar projetos</span>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default About;