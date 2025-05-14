import { Link, useParams } from 'react-router-dom';


const projetos = {
    'coffe-express': {
        titulo: 'Coffe Express',
        descricao: 'Cafeteria online desenvolvida com o fim de disponibilizar o cardápio de cafés da Coffe Express(Empresa fictícia).',
        tecnologias: ['HTML', 'CSS', 'Bootstrap'],
        link: "https://github.com/VanderleyOliveira/coffee-express/raw/main/src/imgs/print_project/final-project-capture-desktop.png",
    },
    'lp-tom-jazz-school': {
        titulo: 'Landing Page - Tom Jazz School',
        descricao: 'Landing page para uma banda musical(fictícia) desenvolvida utilizando HTML e CSS para aplicar responsividade e estilo!',
        tecnologias: ['HTML', 'CSS'],
        link: "https://raw.githubusercontent.com/VanderleyOliveira/LP-tom-jazz-school/refs/heads/main/src/public/print-desktop.png",
    },
};

export default function ProjetDetail() {
    const { slug } = useParams();
    const projeto = projetos[slug];

    if (!projeto) {
        return (
            <div className='flex flex-col justify-center items-center gap-3 h-screen bg-gray-900'>
                <p className='text-sky-50 text-2xl font-bold'>
                    Projeto não encontrado.
                </p>
                <Link to={'/projetos'} className='text-green-400'>Voltar para projetos</Link>
            </div>
        );
    }

    return (
        <main className='flex justify-center items-center h-screen bg-gray-900 text-sky-50'>

            <div className='flex justify-center items-center gap-8'>
                <div className="h-[500px] w-[400px] bg-slate-700 rounded-sm">
                    <img src={projeto.link} alt={projeto.titulo} className='h-full w-full object-cover object-top' />
                </div>

                <div className='space-y-6'>
                    <h1 className="text-4xl mb-3.5 font-bold">{projeto.titulo}</h1>
                    <p>{projeto.descricao}</p>

                    <h4 className='text-xs font-bold text-green-400 uppercase mb-3.5'>Tecnologias usadas:</h4>
                    <ul className='flex gap-3'>
                        {projeto.tecnologias.map((tec, idx) => (
                            <li key={idx} className='rounded p-1 bg-green-400 text-gray-900 font-bold'>{tec}</li>
                        ))}
                    </ul>

                    <Link to={'/projetos'} className='bg-green-400 text-gray-900 hover:bg-green-300 rounded p-2 text-center uppercase font-bold'>Voltar para projetos</Link>
                </div>
            </div>
        </main>
    );
}
