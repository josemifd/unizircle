import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Menu from "../Pages/Menu"
import constants from "../constants/constants"
import Anuncio from "../Pages/Anuncio"
import Crear from "../Pages/Crear"
import Home from "../Pages/Home"

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.root} element={<Home />} />
                <Route path={constants.root + "menu"} element={<Menu />} />
                <Route path={constants.root + "anuncio/:id"} element={<Anuncio />} />
                <Route path={constants.root + "crear"} element={<Crear />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouterComponent