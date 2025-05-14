import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Importação preguiçosa (lazy)
const PageLayout = lazy(() => import('../layouts/PageLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));


const Paths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className='flex justify-center items-center bg-gray-900 h-screen'><p className='text-sky-50 text-2xl font-bold'>Carregando página...</p></div>}>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/projetos" element={<Projects />} />
                        <Route path="/projetos/:slug" element={<ProjectDetail />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Paths;