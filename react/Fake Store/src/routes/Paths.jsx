import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home"
import Page404 from "../pages/Page404";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

const Paths = () => {

    const { logado } = useContext(Context);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {
                    logado && (
                        <>
                            <Route path="/home" element={<Home />} />
                        </>
                    )
                }
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;
