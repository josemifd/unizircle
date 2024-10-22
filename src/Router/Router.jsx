import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import constants from "../constants/constants"
import Reciclar from "../Pages/Reciclar"
import Subir from "../Pages/Subir"

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.root} element={<Home />} />
                <Route path={constants.root + "reciclar/:id"} element={<Reciclar />} />
                <Route path={constants.root + "subir/"} element={<Subir />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouterComponent