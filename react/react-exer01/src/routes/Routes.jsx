import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";
import PageProducts from "../pages/PageProducts";
import Product from "../pages/Product";
import PageNotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="produtos" element={<PageProducts />} />
                    <Route path="produtos/produto/:id/:name" element={<Product />} />
                </Route>
                    <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;