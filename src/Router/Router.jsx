import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Menu from "../Pages/Menu"
import constants from "../constants/constants"
import Anuncio from "../Pages/Anuncio"
import Crear from "../Pages/Crear"
import Talleres from "../Pages/Talleres"

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.root} element={<Menu />} />
                <Route path={constants.root + "anuncio/:id"} element={<Anuncio />} />
                <Route path={constants.root + "crear"} element={<Crear />} />
                <Route path={constants.root + "talleres"} element={<Talleres />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouterComponent