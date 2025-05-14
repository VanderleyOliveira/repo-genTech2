import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Importação preguiçosa (lazy)
const PageLayout = lazy(() => import('../layouts/PageLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));


const Paths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Carregando página...</div>}>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/projetos" element={<Projects />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Paths;